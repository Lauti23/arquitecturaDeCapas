import { Router } from "express";
import { render } from "../controllers/index.controller.js";

export const indexRoute = Router();

indexRoute
    .get("/", render)
