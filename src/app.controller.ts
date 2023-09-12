import { Controller, Get, Query, Request, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { PublicRoute } from './core/decorators/public-route.decorator';
import { Request as ExpressRequest, Router } from 'express';

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

    return { data: session.visits };
  }

  @Get('pages/profile-table')
  getProject(@Query() query: any): any {
    //
    return this.appService.getProject(query);
  }

  @PublicRoute()
  @Get('routes')
  root(@Request() req: ExpressRequest) {
    const router = req.app._router as Router;
    console.log('🚀 ~ file: app.controller.ts:33 ~ AppController ~ root ~ router:', router);
    return {
      data: router.stack
        .map((layer) => {
          if (layer.route) {
            const path = layer.route?.path;
            const method = layer.route?.stack[0].method;
            return `${method.toUpperCase()} ${path}`;
          }
        })
        .filter((item) => item !== undefined),
    };
  }
}
