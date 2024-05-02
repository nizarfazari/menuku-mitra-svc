import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";

export const web = express();   
web.use(express.json());
web.use('/images', express.static('public'))
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware)
