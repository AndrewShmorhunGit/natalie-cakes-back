import express from "express";
import { contentsController } from "./contents.controller";

const contentsRouter = express.Router();

contentsRouter.get("/contents", contentsController.getAllContents);

export { contentsRouter };
