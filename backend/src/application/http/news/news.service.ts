import { Injectable } from '@nestjs/common';
import { News } from '@domain/news/entities/news.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class NewsService extends TypeOrmCrudService<News> {
  constructor(@InjectRepository(News) repo) {
    super(repo);
  }
}