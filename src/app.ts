import express, { Express, Request, Response } from "express";
import { contentsRouter } from "./routes/contents/contents.router";
import cors from "cors";

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(contentsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Natalie Cakes Server");
});

export { app };
