import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

const router = express.Router()

router.post("/api/users/signup", [
    body('email').isEmail().withMessage("Email must be valid."),
    body('password').trim().isLength({
        max: 20,
        min: 4
    }).withMessage("Password must be between 4 and 20 character.")
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
        // throw new Error("Invalid email or password")
        // console.log(errors.array())
        // return res.status(400).send(errors.array())
    }
    const { email, password } = req.body;
    console.log("Creating a user...")

    // throw new Error("Error connecting to database!")
    throw new DatabaseConnectionError()
    res.send({})
})

export { router as SignUpRoutes }