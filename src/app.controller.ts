import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('pages/profile-table')
  getProject(@Query() query: any): any {
    //
    return this.appService.getProject(query);
  }
}
