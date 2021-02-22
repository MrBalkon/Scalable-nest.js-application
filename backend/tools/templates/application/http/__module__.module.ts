import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { __module__(pascalCase) } from "@domain/__module__(kebabCase)/entities/__module__(dotCase).entity"
import { __module__(pascalCase)Controller } from './__module__(dotCase).controller';
import { __module__(pascalCase)Service } from './__module__(dotCase).service';

@Module({
    imports: [TypeOrmModule.forFeature([__module__(pascalCase)])],
    providers: [__module__(pascalCase)Service],
    exports: [__module__(pascalCase)Service],
    controllers: [__module__(pascalCase)Controller],
})
export class __module__(pascalCase)Module {}