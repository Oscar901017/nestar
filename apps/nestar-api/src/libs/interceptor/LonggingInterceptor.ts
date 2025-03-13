import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { stringify } from 'querystring';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LonggingInterceptor implements NestInterceptor {
	private readonly_logger: Logger = new Logger();
	logger: any;

	public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
		const recordTime = Date.now();
		const requstType = context.getType<GqlContextType>();
		

		if (requstType === 'http') {
			//Develop if nedded!
		} else if (requstType === 'graphql') {
            const gqlContext = GqlExecutionContext.create(context);

            this.logger.log(`Type ${requstType}`, 'REQUEST');
			return next.handle().pipe(
				tap(() => {
					const responseTime = Date.now() - recordTime;
					console.log(`${responseTime}ms`, 'RESPONSE');
				}),
			);
		}
	}
    
}
