import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiOptions = new DocumentBuilder()
    .setTitle('oak-seed API Doc')
    .setDescription('base nest')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('tag_test') // match tags in controllers
    .build();

  const apiDocument = SwaggerModule.createDocument(app, apiOptions, { include: [AppModule] });
  SwaggerModule.setup('swagger/', app, apiDocument);

  await app.listen(3000);
}
bootstrap();
