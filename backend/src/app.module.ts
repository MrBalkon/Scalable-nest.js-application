import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDBService } from './infrastructure/db/db.service'
import { LoggerMiddleware } from '@infrastructure/logger/logger.middleware' 

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(configDBService.getTypeOrmConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/');
  }
}
