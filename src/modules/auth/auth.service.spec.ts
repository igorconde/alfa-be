// auth.service.spec.ts

import { BadRequestException, ForbiddenException, HttpException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';

import { CryptoUtils } from '../../core/utils/crypto.utils';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

const ERROR_USER_NOT_FOUND = 'Usuário não encontrado';
const ERROR_INVALID_CREDENTIALS = 'Credenciais inválidas';

describe('AuthService', () => {
  let service: AuthService;
  let usuarioService: UsuarioService;
  let cryptoUtils: CryptoUtils;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsuarioService,
          useValue: {
            findBy: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: CryptoUtils,
          useValue: {
            compare: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    usuarioService = module.get<UsuarioService>(UsuarioService);
    cryptoUtils = module.get<CryptoUtils>(CryptoUtils);
  });

  describe('authenticate', () => {
    it('should throw BadRequestException when email or password are not provided', async () => {
      await expect(service.authenticate(null, 'password')).rejects.toThrow(BadRequestException);
      await expect(service.authenticate('email', null)).rejects.toThrow(BadRequestException);
      await expect(service.authenticate(null, null)).rejects.toThrow(BadRequestException);
    });

    it('should return null when user not found', async () => {
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([]);
      const result = await service.authenticate('email', 'password');
      expect(result).toBeNull();
    });

    it('should return null when password is incorrect', async () => {
      const user = new Usuario();
      user.password = await bcrypt.hash('password', 10);
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([user]);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);
      const result = await service.authenticate('email', 'wrong_password');
      expect(result).toBeNull();
    });

    it('should return user when email and password are correct', async () => {
      // Preparar
      const mockEmail = 'email@teste.com';
      const mockPassword = 'password';
      const hashedPassword = await bcrypt.hash(mockPassword, 10);

      const mockUser = new Usuario();
      mockUser.email = mockEmail;
      mockUser.password = hashedPassword;

      jest.spyOn(usuarioService, 'findBy').mockImplementation(async () => [mockUser]); // Mocking findBy method
      jest.spyOn(cryptoUtils, 'compare').mockImplementation(async () => true); // Mocking compare method

      // Agir
      const result = await service.authenticate(mockEmail, mockPassword);

      // Verificar
      expect(result).toEqual(mockUser);
    });
  });

  describe('signIn', () => {
    it('should throw NotFoundException when user (Email) is not found', async () => {
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([]);
      await expect(service.signIn('email@teste.com', 'password')).rejects.toThrow(
        new NotFoundException(ERROR_USER_NOT_FOUND),
      );

      expect(usuarioService.findBy).toHaveBeenCalledWith({ email: 'email@teste.com' });
    });

    it('should throw ForbiddenException when password is incorrect', async () => {
      const user = new Usuario();
      user.password = await bcrypt.hash('password', 10);
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([user]);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);
      await expect(service.signIn('email@teste.com', 'wrong_password')).rejects.toThrow(
        new ForbiddenException(ERROR_INVALID_CREDENTIALS),
      );

      expect(usuarioService.findBy).toHaveBeenCalledWith({ email: 'email@teste.com' });
    });

    it('should return user when email and password are correct', async () => {
      const user = new Usuario();
      user.password = await bcrypt.hash('password', 10);
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([user]);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(true);
      const result = await service.signIn('email@teste.com', 'password');
      expect(result).toEqual(user);

      expect(usuarioService.findBy).toHaveBeenCalledWith({ email: 'email@teste.com' });
    });
  });

  describe('registerUser', () => {
    const registrationData: RegisterDto = {
      nome: 'Test User',
      email: 'test@test.com',
      password: 'password',
    };

    it('should throw HttpException when create fails', async () => {
      jest.spyOn(usuarioService, 'create').mockResolvedValue(null);
      await expect(service.registerUser(registrationData)).rejects.toThrow(HttpException);

      expect(usuarioService.create).toHaveBeenCalledWith({
        ...registrationData,
        password: expect.any(String),
      });
    });

    it('should return created user when create succeeds', async () => {
      const user = new Usuario();
      jest.spyOn(usuarioService, 'create').mockResolvedValue(user);
      const result = await service.registerUser(registrationData);
      expect(result).toEqual(user);

      expect(usuarioService.create).toHaveBeenCalledWith({
        ...registrationData,
        password: expect.any(String),
      });
    });
  });
});
