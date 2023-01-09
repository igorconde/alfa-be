import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const ignoreList = ['/'];

    // ignore index
    if (ignoreList.includes(request.route.path)) return next.handle();

    const version = (request.route && request.route.path ? request.route.path : request.raw.url).split('/')[2];
    const now = Date.now();

    return next.handle().pipe(
      map((content) => ({
        statusCode: response.statusCode,
        timestamp: new Date().toISOString(),
        function: {
          method: request.method || request.raw.method,
          url: request.route && request.route.path ? request.route.path : request.raw.url,
          version,
          ip: request.ip,
        },
        reqId: context.switchToHttp().getRequest().reqId,
        responseTime: `${Date.now() - now}ms`,
        message: content.message || '',
        data: content.data || {},
        meta: {},
      })),
    );
  }
}
