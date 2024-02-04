import express, { Express, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { routes } from "./routes";
import morgan from "morgan";
import dotenv from "dotenv";

const server: Express = express();

server.use(bodyParser.json());
server.use(cookieParser());
server.use(morgan("dev"));

server.use("/", routes);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

export { server };
