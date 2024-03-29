import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post, Query, Request, Session } from '@nestjs/common';
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

  @PublicRoute()
  @Get('delay')
  @HttpCode(HttpStatus.OK)
  async delayResponse(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return 'Response after 10 seconds';
  }

  @PublicRoute()
  @Post('large-payload')
  handleLargePayload(@Body() data: any): any {
    const sizeInBytes = Buffer.from(JSON.stringify(data)).length;
    const sizeInMegabytes = (sizeInBytes / (1024 * 1024)).toFixed(2);

    return {
      message: 'Payload recebido com sucesso.',
      sizeInBytes,
      sizeInMegabytes: `${sizeInMegabytes} MB`,
    };
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
