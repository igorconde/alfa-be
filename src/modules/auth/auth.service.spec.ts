// auth.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { BadRequestException, ForbiddenException, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

import { UsuarioService } from '../modules/usuario/usuario.service';
import { CryptoUtils } from '../core/utils/crypto.utils';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Usuario } from '../modules/usuario/entities/usuario.entity';

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
            createUser: jest.fn(),
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
      const user = new Usuario();
      user.password = await bcrypt.hash('password', 10);
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([user]);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(true);
      const result = await service.authenticate('email', 'password');
      expect(result).toEqual(user);
    });
  });

  describe('signIn', () => {
    it('should throw NotFoundException when user is not found', async () => {
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([]);
      await expect(service.signIn('email', 'password')).rejects.toThrow(new NotFoundException("User doesn't exist"));

      expect(usuarioService.findBy).toHaveBeenCalledWith({ email: 'email' });
    });

    it('should throw ForbiddenException when password is incorrect', async () => {
      const user = new Usuario();
      user.password = await bcrypt.hash('password', 10);
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([user]);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);
      await expect(service.signIn('email', 'wrong_password')).rejects.toThrow(ForbiddenException);

      expect(usuarioService.findBy).toHaveBeenCalledWith({ email: 'email' });
    });

    it('should return user when email and password are correct', async () => {
      const user = new Usuario();
      user.password = await bcrypt.hash('password', 10);
      jest.spyOn(usuarioService, 'findBy').mockResolvedValue([user]);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(true);
      const result = await service.signIn('email', 'password');
      expect(result).toEqual(user);

      expect(usuarioService.findBy).toHaveBeenCalledWith({ email: 'email' });
    });
  });

  describe('registerUser', () => {
    const registrationData: RegisterDto = {
      nome: 'Test User',
      email: 'test@test.com',
      password: 'password',
    };

    it('should throw HttpException when createUser fails', async () => {
      jest.spyOn(usuarioService, 'createUser').mockResolvedValue(null);
      await expect(service.registerUser(registrationData)).rejects.toThrow(HttpException);

      expect(usuarioService.createUser).toHaveBeenCalledWith({
        ...registrationData,
        password: expect.any(String),
      });
    });

    it('should return created user when createUser succeeds', async () => {
      const user = new Usuario();
      jest.spyOn(usuarioService, 'createUser').mockResolvedValue(user);
      const result = await service.registerUser(registrationData);
      expect(result).toEqual(user);

      expect(usuarioService.createUser).toHaveBeenCalledWith({
        ...registrationData,
        password: expect.any(String),
      });
    });
  });
});
