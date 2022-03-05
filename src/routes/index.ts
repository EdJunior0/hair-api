import * as express from "express";
import { authentication } from "../middlewares/authentication";
import { buildAuthRoutes } from "./auth";
import { buildServiceRoutes } from "./service";

const routes = express.Router();

buildAuthRoutes(routes);
buildServiceRoutes(routes, authentication);
export default routes;
