import { MailerService } from '@nestjs-modules/mailer';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailData } from './interfaces/mail-data.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService, private configService: ConfigService) {}

  async userSignUp(mailData: MailData<{ hash: string }>) {
    await this.mailerService.sendMail({
      to: mailData.to,
      subject: 'test@gmail.com',
      text: `${this.configService.get('app.frontendDomain')}/confirm-email/${mailData.data.hash}`,
      template: 'activation',
      context: {
        title: 'Email de Teste',
        url: `${this.configService.get('app.frontendDomain')}/confirm-email/${mailData.data.hash}`,
        actionTitle: 'E-mail de Teste',
        app_name: this.configService.get('app.name'),
        text1: 'Teste',
        text2: 'Teste',
      },
    });
  }
  catch(err) {
    throw new BadRequestException(err.message);
  }
}
