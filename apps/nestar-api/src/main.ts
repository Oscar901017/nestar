import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MaxFileSizeValidator, ValidationPipe } from '@nestjs/common';
import { LonggingInterceptor } from './libs/interceptor/LonggingInterceptor';
import { graphqlUpladerExpress } from 'graphql-upload';
import * as express from 'express';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new LonggingInterceptor());
	app.enableCors({ origin: true, credentials: true });

	app.use(graphqlUpladerExpress({ maxFileSize: 15000000, maxFile: 10 }));
	app.use('/uploads', express.static('./upload'));
	await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap();
