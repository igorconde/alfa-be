import { CryptoUtils } from 'src/core/utils/crypto.utils';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import {
  NotFoundException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

const mockUsuarioRepository = () => ({
  findOne: jest.fn(),
});

const mockUsuarioService = () => ({
  findByEmail: jest.fn(),
  createUser: jest.fn(),
});

const mockCryptoUtils = () => ({
  compare: jest.fn(),
});

describe('AuthService', () => {
  let authService: AuthService;
  let usuarioRepository: Repository<Usuario>;
  let usuarioService: UsuarioService;
  let cryptoUtils: CryptoUtils;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(Usuario),
          useFactory: mockUsuarioRepository,
        },
        {
          provide: UsuarioService,
          useFactory: mockUsuarioService,
        },
        {
          provide: CryptoUtils,
          useFactory: mockCryptoUtils,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usuarioRepository = module.get(getRepositoryToken(Usuario));
    usuarioService = module.get<UsuarioService>(UsuarioService);
    cryptoUtils = module.get<CryptoUtils>(CryptoUtils);
  });

  describe('authenticate', () => {
    it('should return a user when the email and password are correct', async () => {
      const loginAuthDto: LoginAuthDto = {
        email: 'test@example.com',
        password: 'password',
      };

      const user = new Usuario();
      user.email = 'test@example.com';
      user.password = 'hashed_password';

      jest.spyOn(usuarioService, 'findByEmail').mockResolvedValue(user);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(true);

      const result = await authService.authenticate(loginAuthDto.email, loginAuthDto.password);
      expect(result).toEqual(user);
    });

    it('should return null when the email or password is incorrect', async () => {
      const loginAuthDto: LoginAuthDto = {
        email: 'test@example.com',
        password: 'wrong_password',
      };

      const user = new Usuario();
      user.email = 'test@example.com';
      user.password = 'hashed_password';

      jest.spyOn(usuarioService, 'findByEmail').mockResolvedValue(user);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);

      const result = await authService.authenticate(loginAuthDto.email, loginAuthDto.password);
      expect(result).toBeNull();
    });
  });

  describe('signIn', () => {
    it('should return a user when the email and password are correct', async () => {
      const loginAuthDto: LoginAuthDto = {
        email: 'test@example.com',
        password: 'password',
      };

      const user = new Usuario();
      user.email = 'test@example.com';
      user.password = 'hashed_password';

      jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(user);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(true);
      jest.spyOn(usuarioService, 'findByEmail').mockResolvedValue(user);

      const result = await authService.signIn(loginAuthDto.email, loginAuthDto.password);
      expect(result).toEqual(user);
    });

    it('should throw a NotFoundException when the user does not exist', async () => {
      const loginAuthDto: LoginAuthDto = {
        email: 'test@example.com',
        password: 'password',
      };

      jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(undefined);

      await expect(authService.signIn(loginAuthDto.email, loginAuthDto.password)).rejects.toThrowError(
        NotFoundException,
      );
    });

    it('should throw a ForbiddenException when the password is incorrect', async () => {
      const loginAuthDto: LoginAuthDto = {
        email: 'test@example.com',
        password: 'wrong_password',
      };

      const user = new Usuario();
      user.email = 'test@example.com';
      user.password = 'hashed_password';

      jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(user);
      jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);

      await expect(authService.signIn(loginAuthDto.email, loginAuthDto.password)).rejects.toThrowError(
        ForbiddenException,
      );
    });
  });

  describe('registerUser', () => {
    it('should successfully register a user and return the created user', async () => {
      const registerDto: RegisterDto = {
        email: 'test@example.com',
        password: 'password',
        nome: 'João Maria',
      };

      const createdUser = new Usuario();
      createdUser.email = 'test@example.com';
      createdUser.password = 'hashed_password';
      createdUser.nome = 'João Maria';

      jest.spyOn(usuarioService, 'createUser').mockResolvedValue(createdUser);

      const result = await authService.registerUser(registerDto);
      expect(result).toEqual(createdUser);
    });

    it('should throw an HttpException with status code 500 when createUser fails', async () => {
      const registerDto: RegisterDto = {
        email: 'test@example.com',
        password: 'password',
        nome: 'João Maria',
      };

      jest.spyOn(usuarioService, 'createUser').mockResolvedValue(null);

      await expect(authService.registerUser(registerDto)).rejects.toThrowError(
        new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR),
      );
    });
  });

  it('should return null when the user is not found', async () => {
    const loginAuthDto: LoginAuthDto = {
      email: 'nonexistent@example.com',
      password: 'password',
    };

    jest.spyOn(usuarioService, 'findByEmail').mockResolvedValue(null);

    const result = await authService.authenticate(loginAuthDto.email, loginAuthDto.password);
    expect(result).toBeNull();
  });

  it('should propagate the error when createUser throws an exception', async () => {
    const registerDto: RegisterDto = {
      email: 'test@example.com',
      password: 'password',
      nome: 'João Maria',
    };

    const error = new Error('An error occurred');

    jest.spyOn(usuarioService, 'createUser').mockRejectedValue(error);

    await expect(authService.registerUser(registerDto)).rejects.toThrowError(error);
  });

  it('should return null when the password is incorrect', async () => {
    const loginAuthDto: LoginAuthDto = {
      email: 'test@example.com',
      password: 'wrong_password',
    };

    const user = new Usuario();
    user.email = 'test@example.com';
    user.password = 'hashed_password';
    user.nome = 'João Maria';

    jest.spyOn(usuarioService, 'findByEmail').mockResolvedValue(user);
    jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);

    const result = await authService.authenticate(loginAuthDto.email, loginAuthDto.password);
    expect(result).toBeNull();
  });

  it('should throw a ForbiddenException when the password is incorrect', async () => {
    const loginAuthDto: LoginAuthDto = {
      email: 'test@example.com',
      password: 'wrong_password',
    };

    const user = new Usuario();
    user.email = 'test@example.com';
    user.password = 'hashed_password';
    user.nome = 'João Maria';

    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(user);
    jest.spyOn(cryptoUtils, 'compare').mockResolvedValue(false);

    await expect(authService.signIn(loginAuthDto.email, loginAuthDto.password)).rejects.toThrowError(
      ForbiddenException,
    );
  });

  it('should throw a BadRequestException when the email is invalid', async () => {
    const registerDto: RegisterDto = {
      email: 'invalid_email',
      password: 'password',
      nome: 'João Maria',
    };

    jest.spyOn(usuarioService, 'createUser').mockImplementation(() => {
      throw new BadRequestException('Invalid email format');
    });

    await expect(authService.registerUser(registerDto)).rejects.toThrowError();
  });

  it('should throw a ConflictException when the email is already in use', async () => {
    const registerDto: RegisterDto = {
      email: 'test@example.com',
      password: 'password',
      nome: 'João Maria',
    };

    jest.spyOn(usuarioService, 'createUser').mockImplementation(() => {
      throw new ConflictException('Email is already in use');
    });

    await expect(authService.registerUser(registerDto)).rejects.toThrowError(ConflictException);
  });

  it('should throw a BadRequestException when the email is invalid', async () => {
    const loginAuthDto: LoginAuthDto = {
      email: 'invalid_email',
      password: 'password',
    };

    jest.spyOn(usuarioService, 'findByEmail').mockImplementation(() => {
      throw new BadRequestException('Invalid email format');
    });

    await expect(authService.authenticate(loginAuthDto.email, loginAuthDto.password)).rejects.toThrowError(
      BadRequestException,
    );
  });

  it('should throw a BadRequestException when the email is null', async () => {
    const loginAuthDto: LoginAuthDto = {
      email: null,
      password: 'password',
    };

    await expect(authService.authenticate(loginAuthDto.email, loginAuthDto.password)).rejects.toThrowError(
      BadRequestException,
    );
  });
});
