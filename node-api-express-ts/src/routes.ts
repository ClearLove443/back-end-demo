import * as express from "express";
import { homeController } from "./controller/home-controller.js";
const AppRoutes = express.Router();
AppRoutes.get("/test", homeController.hello);
export { AppRoutes };
