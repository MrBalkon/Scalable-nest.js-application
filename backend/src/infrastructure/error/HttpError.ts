import { Logger } from '../logger/logger.service'

export class HttpError extends Error {
    public statusCode;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        Logger.error(`STATUS CODE: ${statusCode} MESSSAGE: ${message}`)

        Object.setPrototypeOf(this, HttpError.prototype);
    }
}