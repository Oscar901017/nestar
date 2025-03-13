import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LonggingInterceptor } from './libs/interceptor/LonggingInterceptor';


async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LonggingInterceptor());
	await app.listen(process.env.PORT_API ?? 3000);
}
bootstrap();
