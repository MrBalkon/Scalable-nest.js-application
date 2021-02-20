import { Injectable } from '@nestjs/common';
import { Card } from '@domain/card/entities/card.entity'
import { getRepository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { CreateCardDto } from '@domain/card/dtos/createCardDto';

@Injectable()
export class CardService extends TypeOrmCrudService<Card> {
  constructor(@InjectRepository(Card) repo) {
    super(repo);
  }
}
// @Injectable()
// export class CardService {
//   async find(): Promise<Card[]> {
//     return await getRepository(Card).find();
//   }

//   async create(createCardDto: CreateCardDto) : Promise<any>{
//     return (await getRepository(Card).insert({...createCardDto})).generatedMaps[0];
//   }
// }