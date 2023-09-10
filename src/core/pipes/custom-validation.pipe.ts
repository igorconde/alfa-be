import { BadRequestException, Injectable } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      transform: true,
      forbidUnknownValues: true,
      stopAtFirstError: false,
      whitelist: true,
      exceptionFactory: (errors) => {
        const messages = errors.map(({ property, constraints }) => ({
          field: property,
          messages: Object.values(constraints),
        }));
        throw new BadRequestException(messages);
      },
      validationError: { target: false, value: false },
    });
  }
}
