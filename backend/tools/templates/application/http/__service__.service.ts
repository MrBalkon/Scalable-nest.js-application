import { Injectable } from '@nestjs/common';
import { __module__(pascalCase) } from '@domain/__module__(kebabCase)/entities/__module__(dotCase).entity'
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class __module__(pascalCase)Service extends TypeOrmCrudService<__module__(pascalCase)> {
  constructor(@InjectRepository(__module__(pascalCase)) repo) {
    super(repo);
  }
}