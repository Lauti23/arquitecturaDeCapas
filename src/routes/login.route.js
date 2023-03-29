import { Router } from "express";
import { login, loginPost } from "../controllers/login.controller.js";


export const loginRoute = Router();

loginRoute
    .get("/", login)
    .post("/", loginPost)