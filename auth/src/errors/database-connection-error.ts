import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    
    statusCode: number = 500;
    reason: string = "Error connecting to Database";
    constructor() {
        super("DatabaseConnetion Error");

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{
            message: this.reason
        }]
    }
}