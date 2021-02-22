import { NewsModule } from '@application/http/news/news.module'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CardModule } from '@application/http/card/card.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDBService } from './infrastructure/db/db.service'
import { LoggerMiddleware } from '@infrastructure/logger/logger.middleware';
import { AuthCheckerMiddleware } from '@application/http/shared/auth/auth.middleware'

@Module({
  imports: [NewsModule,  ConfigModule.forRoot(), TypeOrmModule.forRoot(configDBService.getTypeOrmConfig()), CardModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheckerMiddleware, LoggerMiddleware)
      .forRoutes('/');
  }
}
