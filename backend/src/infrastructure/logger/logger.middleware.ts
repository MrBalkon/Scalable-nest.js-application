import { Injectable, NestMiddleware} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Logger } from './logger.service'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path: url } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('close', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      Logger.request(method, url, statusCode, contentLength, userAgent, ip);
    });

    next();
  }
}