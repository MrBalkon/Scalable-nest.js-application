import { Injectable } from '@nestjs/common';
import { Card } from '@domain/card/entities/card.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class CardService extends TypeOrmCrudService<Card> {
  constructor(@InjectRepository(Card) repo) {
    super(repo);
  }
}