import express, { Express, Request, Response } from "express";
import { contentsRouter } from "./routes/contents/contents.router";

const app: Express = express();

app.use(express.json());
app.use(contentsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Natalie Cakes Server");
});

export { app };
