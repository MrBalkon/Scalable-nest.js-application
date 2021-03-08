import { Controller, UseGuards } from '@nestjs/common';
import { __module__(pascalCase)Service } from './__module__(dotCase).service';
import { __module__(pascalCase) } from '@domain/__module__(kebabCase)/entities/__module__(dotCase).entity';
import { Crud, CrudController } from "@nestjsx/crud";

import { Role } from '@infrastructure/auth/roles.enum'
import { RestfulCrudRoleGuard } from '@infrastructure/auth/roles.guard';

@Crud({
    model: {
      type: __module__(pascalCase),
    },
    params: {
        id: {
          field: 'id',
          type: 'uuid',
          primary: true,
        },
    },
})
@ApiTags("__module__(kebabCase)")
@Controller("__module__(kebabCase)")
@UseGuards( new RestfulCrudRoleGuard({
  readAllRoles: [Role.Admin, Role.User],
  readOneRoles: [Role.Admin, Role.User],
}))
export class __module__(pascalCase)Controller implements CrudController<__module__(pascalCase)> {
  constructor(public service: __module__(pascalCase)Service) {}
}