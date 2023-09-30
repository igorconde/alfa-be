import { utilities as nestWinstonModuleUtilities, WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

export const winstonOptions: WinstonModuleOptions = {
  transports: [
    new winston.transports.DailyRotateFile({
      filename: 'logs/%DATE%-error.log',
      level: 'error',
      format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.json(), winston.format.metadata()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '90d',
      maxSize: '1g',
    }),
    new winston.transports.DailyRotateFile({
      filename: 'logs/%DATE%-combined.log',
      format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.json()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '90d',
      maxSize: '1g',
    }),
    new winston.transports.Console({
      level: 'silly',
      format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), nestWinstonModuleUtilities.format.nestLike()),
    }),
  ],
  exceptionHandlers: [new winston.transports.File({ filename: 'logs/exceptions.log' })],
};
