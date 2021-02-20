import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@infrastructure/logger/logger.service'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const port = process.env.SERVER_PORT
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle(`${process.env.PROJECT_NAME} API`)
  .setDescription(`The ${process.env.PROJECT_NAME} ptoject API`)
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.title(`${process.env.PROJECT_NAME}`)
    Logger.info(`Server is starting on port ${port}`)
  });
}
bootstrap();
