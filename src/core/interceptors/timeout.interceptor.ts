import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  private readonly timeoutValue: number;

  constructor(private configService: ConfigService) {
    this.timeoutValue = Number(this.configService.get('app.timeout'));
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const timeoutValue = Number(this.configService.get('app.timeout'));

    return next.handle().pipe(
      timeout(this.timeoutValue),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException(`A operação excedeu o tempo limite de ${timeoutValue}ms`));
        }
        return throwError(() => err);
      }),
    );
  }
}
