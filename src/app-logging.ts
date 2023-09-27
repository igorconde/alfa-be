import { utilities as nestWinstonModuleUtilities, WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';

export const winstonOptions: WinstonModuleOptions = {
  transports: [
    // Log de erro com rotação diária
    new winston.transports.DailyRotateFile({
      filename: 'logs/%DATE%-error.log',
      level: 'error',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '90d', // Máximo de 90 dias
      maxSize: '1g', // Tamanho máximo de 1GB
    }),
    // Log combinado com rotação diária
    new winston.transports.DailyRotateFile({
      filename: 'logs/%DATE%-combined.log',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '90d', // Máximo de 90 dias
      maxSize: '1g', // Tamanho máximo de 1GB
    }),
    // Log de console
    new winston.transports.Console({
      format: winston.format.combine(winston.format.timestamp(), nestWinstonModuleUtilities.format.nestLike()),
    }),
  ],
};
