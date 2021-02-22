import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { News } from "@domain/news/entities/news.entity"
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
    imports: [TypeOrmModule.forFeature([News])],
    providers: [NewsService],
    exports: [NewsService],
    controllers: [NewsController],
})
export class NewsModule {}