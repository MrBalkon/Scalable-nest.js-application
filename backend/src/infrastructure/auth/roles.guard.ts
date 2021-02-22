import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { getAction } from '@nestjsx/crud'
import { Role } from './roles.enum'

@Injectable()
export class RestfulCrudRoleGuard implements CanActivate {
  
    constructor(
    //   private readonly reflector: Reflector,
      public restfulCrudOptions: {
          readAllRoles?: Role [],
          readOneRoles?: Role [],
          createOneRoles?: Role [],
          createManyRoles?: Role [],
          replaceOneRoles?: Role [],
          updateOneRoles?: Role [],
          deleteOneRoles?: Role [] 
      }
    ) {}

  canActivate(context: ExecutionContext): boolean {

    const request = context.switchToHttp().getRequest()
    const handler = context.getHandler()
    const controller = context.getClass()

    // const feature = getFeature(controller)
    const action = getAction(handler)  
    const user = request.user

    // console.log(controller.caller)

    switch(action) {
        case 'Read-All' : {
            if(!this.restfulCrudOptions.readAllRoles) return false;
            return this.restfulCrudOptions.readAllRoles.includes(user.role)
        }

        case 'Read-One' : {
            if(!this.restfulCrudOptions.readOneRoles) return false;
            return this.restfulCrudOptions.readOneRoles.includes(user.role)
        } 

        case 'Create-One' : {
            if(!this.restfulCrudOptions.createOneRoles) return false;
            return this.restfulCrudOptions.createOneRoles.includes(user.role)
        }

        case 'Create-Many' : {
            if(!this.restfulCrudOptions.createManyRoles) return false;
            return this.restfulCrudOptions.createManyRoles.includes(user.role)
        }

        case 'Update-One' : {
            if(!this.restfulCrudOptions.updateOneRoles) return false;
            return this.restfulCrudOptions.updateOneRoles.includes(user.role)
        }

        case 'Delete-One' : {
            if(!this.restfulCrudOptions.deleteOneRoles) return false;
            return this.restfulCrudOptions.deleteOneRoles.includes(user.role)
        }

        case 'Replace-One' : {
            if(!this.restfulCrudOptions.replaceOneRoles) return false;
            return this.restfulCrudOptions.replaceOneRoles.includes(user.role)
        }

        default : {
            return true
        }
    }

  }
}