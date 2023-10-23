import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ApiHost } from './API/constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true
    })
  );

  const configSwagger = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Skins')
    .setDescription('API que permite a las personas usuarias consultar, adquirir, modificar y eliminar skins para un videojuego.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('', app, document);
  await app.listen(ApiHost.PORT, ApiHost.HOST);
}

bootstrap();
