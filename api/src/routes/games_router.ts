import { Router } from "express";
import * as handlers from "../handlers";

const games_router = Router();

games_router.get("/", handlers.getGamesHandlers);

export { games_router };
