import expres, { Request, Response } from "express";
import { json } from "body-parser";
import { CurrentUserRoutes } from "./routes/current-user";
import { SignInRoutes } from "./routes/signin";
import { SignUpRoutes } from "./routes/signup";
import { SignOutRoutes } from "./routes/signout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import 'express-async-errors';

const app = expres();
app.use(json())

app.use(CurrentUserRoutes)
app.use(SignInRoutes)
app.use(SignUpRoutes)
app.use(SignOutRoutes)

app.get("*", async ()=>{
    throw new NotFoundError()
})

app.use(errorHandler)

app.listen(3000, ()=>{
    console.log("Listen on port 3000!")
})