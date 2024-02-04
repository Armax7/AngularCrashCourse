import { Router } from "express";
import { games_router } from "./games_router";

const mainRouter: Router = Router();

mainRouter.use("/games", games_router);

export { mainRouter as routes };
