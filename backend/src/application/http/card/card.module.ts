import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Card } from "@domain/card/entities/card.entity"
import { CardController } from './card.controller';
import { CardService } from './card.service';

@Module({
    imports: [TypeOrmModule.forFeature([Card])],
    providers: [CardService],
    exports: [CardService],
    controllers: [CardController],
})
export class CardModule {}