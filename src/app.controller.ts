import { Controller, Get, Logger, Query, Request, Session } from '@nestjs/common';
import { Request as ExpressRequest, Router } from 'express';
import { AppService } from './app.service';
import { PublicRoute } from './core/decorators/public-route.decorator';

@Controller()
export class AppController {
  private logger = new Logger('AppController.name');
  constructor(private readonly appService: AppService) {}

  @PublicRoute()
  @Get()
  getHello(): any {
    this.logger.verbose(`XPTO`);
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
    return {
      data: router.stack
        .map((layer) => {
          if (layer.route) {
            const path = layer.route?.path;
            const method = layer.route?.stack[0].method;
            if (!path.startsWith('/api-docs')) {
              return `${method.toUpperCase()} ${path}`;
            }
          }
        })
        .filter((item) => item !== undefined),
    };
  }
}
