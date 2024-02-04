import { Request, Response } from "express";
import * as controllers from "../controllers";

export const getGamesHandlers = async function (req: Request, res: Response) {
  try {
    const games = await controllers.getGamesController();
    res.status(200).json(games);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
