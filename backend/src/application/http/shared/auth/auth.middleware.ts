import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Role } from '../../../../infrastructure/auth/roles.enum';
// import { Logger } from './logger.service'

@Injectable()
export class AuthCheckerMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    req.user = {
      role: Role.Admin
    }
    next();
  }
}