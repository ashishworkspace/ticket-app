import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError{
    statusCode: number = 404;
    serializeErrors(): { message: string; field?: string }[] {
        return [{
            message: "Route not found!"
        }]
    }
    constructor(){
        super("Not Found Error");
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }
}