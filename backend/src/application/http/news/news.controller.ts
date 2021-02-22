import { Controller, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from '@domain/news/entities/news.entity';
import { Crud, CrudController } from "@nestjsx/crud";

import { Role } from '@infrastructure/auth/roles.enum'
import { RestfulCrudRoleGuard } from '@infrastructure/auth/roles.guard';

@Crud({
    model: {
      type: News,
    },
    params: {
        id: {
          field: 'id',
          type: 'uuid',
          primary: true,
        },
    },
})
@Controller("news")
@UseGuards( new RestfulCrudRoleGuard({
  readAllRoles: [Role.Admin, Role.User],
  readOneRoles: [Role.Admin, Role.User],
}))
export class NewsController implements CrudController<News> {
  constructor(public service: NewsService) {}
}