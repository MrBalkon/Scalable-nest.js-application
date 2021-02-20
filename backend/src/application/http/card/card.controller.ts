import { Controller, Get, Post, Body } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from '@domain/card/entities/card.entity';
import { Crud, CrudController } from "@nestjsx/crud";
import { CreateCardDto } from '@domain/card/dtos/createCardDto';

@Crud({
    model: {
      type: Card,
    },
    params: {
        id: {
          field: 'id',
          type: 'uuid',
          primary: true,
        },
    },
})
@Controller("card")
export class CardController implements CrudController<Card> {
  constructor(public service: CardService) {}
}
// @Controller('card')
// export class CardController{
//     constructor(private readonly cardService: CardService) {}

//     @Get()
//     async find(): Promise <Card[]> {
//         return await this.cardService.find();
//     }

//     @Post()
//     async create(@Body() createCarddto: CreateCardDto): Promise <Card> {
//         return await this.cardService.create(createCarddto)
//     }
// }
