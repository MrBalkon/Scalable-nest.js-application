import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from '@infrastructure/swagger/configuration'
import { Logger } from '@infrastructure/logger/logger.service'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const port = process.env.SERVER_PORT
  const app = await NestFactory.create(AppModule);


  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.title(`${process.env.PROJECT_NAME}`)
    Logger.info(`Server is starting on port ${port}`)
  });
}
bootstrap();
