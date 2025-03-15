import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { stringify } from 'querystring';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LonggingInterceptor implements NestInterceptor {
	private readonly Logger: Logger = new Logger();
	logger: any;

	public intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Observable<any> {
		const recordTime = Date.now();
		const requstType = context.getType<GqlContextType>();

		if (requstType === 'http') {
			/*Develop if nedded! */
		} else if (requstType === 'graphql') {
			/*  (1) Print  request  **/
			const gqlContext = GqlExecutionContext.create(context);
			this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');

			/* (2) Errors handing via GraphQL **/

			/*   (3) No Errors,  giving  Respomse below **/
			return next.handle().pipe(
				tap((context) => {
					const responseTime = Date.now() - recordTime;
					this.logger.log(`${this.stringify(context)}-${responseTime}ms \n\n`, 'RESPONSE');
				}),
			);
		}
	}

	private stringify(context: ExecutionContext): string {
		return JSON.stringify(context).slice(0, 75);
	}
}
