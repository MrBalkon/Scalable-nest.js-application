import { Controller, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from '@domain/card/entities/card.entity';
import { Crud, CrudController } from "@nestjsx/crud";
import { RestfulCrudRoleGuard } from '@infrastructure/auth/roles.guard';
import { Role } from '@infrastructure/auth/roles.enum'
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
@UseGuards( new RestfulCrudRoleGuard({
        readAllRoles: [Role.Admin, Role.User],
        readOneRoles: [Role.Admin, Role.User],
        createOneRoles: [Role.Admin],
        updateOneRoles: [Role.Admin],
        deleteOneRoles: [Role.Admin]
}))
export class CardController implements CrudController<Card> {
  constructor(public service: CardService) {}
}