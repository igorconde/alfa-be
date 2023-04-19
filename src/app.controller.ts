import { Controller, Get, Query, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicRoute } from './core/decorators/public-route.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @PublicRoute()
  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(@Session() session: Record<string, any>): any {
    session.visits = session.visits ? session.visits + 1 : 1;

    return session;
  }

  @Get('pages/profile-table')
  getProject(@Query() query: any): any {
    //
    return this.appService.getProject(query);
  }
}
