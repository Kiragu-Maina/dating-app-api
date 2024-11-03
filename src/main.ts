import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  app.useGlobalPipes(
  //   new ValidationPipe({
  //     transform: true, // Enables transformation with class-transformer
  //     whitelist: true, // Strips out properties not in the DTO
  //     forbidNonWhitelisted: true, // Throws an error for unexpected properties
  //   }),
  // );

  const config = new DocumentBuilder()
    .setTitle('Dating App API')
    .setDescription('API documentation for the Dating App')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
