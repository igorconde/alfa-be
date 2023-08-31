import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LogInWithCredentialsGuard } from './guards/local-auth.guard';
import { RegisterDto } from './dto/register.dto';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

jest.mock('./auth.service');

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: LogInWithCredentialsGuard,
          useValue: {
            canActivate: jest.fn(() => true),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return user data for authenticated user', async () => {
    const expectedUserData = { id: 1, email: 'test@example.com' };
    const mockRequest = {
      user: expectedUserData,
    };

    const result = await authController.authenticate(mockRequest as any);

    expect(result).toEqual({ data: expectedUserData });
  });

  it('should return an access token when login is successful', async () => {
    const loginDto = { email: 'test@example.com', password: 'password' };
    const expectedToken = 'access_token';

    authService.authenticate = jest.fn().mockResolvedValue(expectedToken);

    const result = await authController.login(loginDto);

    expect(authService.authenticate).toHaveBeenCalledWith(loginDto.email, loginDto.password);
    expect(result).toEqual(expectedToken);
  });

  it('should logout user and clear the cookie', async () => {
    const request = {
      logOut: jest.fn().mockImplementation((options, callback) => {
        callback(null);
      }),
    };
    const response = {
      clearCookie: jest.fn(),
    };

    const result = await authController.logout(request as unknown as Request, response as unknown as Response);

    expect(request.logOut).toHaveBeenCalled();
    expect(response.clearCookie).toHaveBeenCalledWith('connect.sid', { path: '/' });
    expect(result).toEqual({ logout: true });
  });

  it('should throw an error when logout fails', async () => {
    const request = {
      logOut: jest.fn().mockImplementation((options, callback) => {
        callback(new Error('Logout error'));
      }),
    };
    const response = {
      clearCookie: jest.fn(),
    };

    await expect(authController.logout(request as unknown as Request, response as unknown as Response)).rejects.toThrow(
      InternalServerErrorException,
    );
  });

  it('should return an error when registration data is invalid', async () => {
    const registerData: RegisterDto = { email: '', password: '', nome: '' };
    authService.registerUser = jest.fn().mockRejectedValue(new Error('Invalid data'));

    await expect(authController.register(registerData)).rejects.toThrow('Invalid data');
  });

  it('should throw UnauthorizedException when login credentials are invalid', async () => {
    const loginDto = { email: 'invalid@example.com', password: 'wrong-password' };
    authService.authenticate = jest.fn().mockRejectedValue(new UnauthorizedException('Invalid email or password'));

    await expect(authController.login(loginDto)).rejects.toThrow('Invalid email or password');
    expect(authService.authenticate).toHaveBeenCalledWith(loginDto.email, loginDto.password);
  });

  it('should throw ConflictException when registering with an existing email', async () => {
    const registerData: RegisterDto = { email: 'existing@example.com', password: 'password', nome: 'John Doe' };
    authService.registerUser = jest.fn().mockRejectedValue(new ConflictException('Email already exists'));

    await expect(authController.register(registerData)).rejects.toThrow('Email already exists');
    expect(authService.registerUser).toHaveBeenCalledWith(registerData);
  });

  it('should throw UnauthorizedException when trying to login with an unregistered email', async () => {
    const loginDto = { email: 'unregistered@example.com', password: 'password' };
    authService.authenticate = jest.fn().mockRejectedValue(new UnauthorizedException('Email not found'));

    await expect(authController.login(loginDto)).rejects.toThrow('Email not found');
    expect(authService.authenticate).toHaveBeenCalledWith(loginDto.email, loginDto.password);
  });

  it('should throw BadRequestException when registering with a too long password', async () => {
    const registerData: RegisterDto = {
      email: 'new@example.com',
      password: 'averylongpasswordthatexceedsthelimit',
      nome: 'John Doe',
    };
    authService.registerUser = jest.fn().mockRejectedValue(new BadRequestException('Password too long'));

    await expect(authController.register(registerData)).rejects.toThrow('Password too long');
    expect(authService.registerUser).toHaveBeenCalledWith(registerData);
  });

  it('should throw UnauthorizedException when trying to login with an incorrect password', async () => {
    const loginDto = { email: 'test@example.com', password: 'incorrect-password' };
    authService.authenticate = jest.fn().mockRejectedValue(new UnauthorizedException('Incorrect password'));

    await expect(authController.login(loginDto)).rejects.toThrow('Incorrect password');
    expect(authService.authenticate).toHaveBeenCalledWith(loginDto.email, loginDto.password);
  });
});
