import * as express from "express";
import { buildAuthRoutes } from "./auth";

const routes = express.Router();

buildAuthRoutes(routes);
export default routes;
