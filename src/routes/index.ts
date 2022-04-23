import * as express from "express";
import { authentication } from "../middlewares/authentication";
import { buildAuthRoutes } from "./auth";
import { buildReservationRoutes } from "./reservation";
import { buildServiceRoutes } from "./service";
import { buildUserRoutes } from "./user";

const routes = express.Router();

buildAuthRoutes(routes);
buildServiceRoutes(routes, authentication);
buildUserRoutes(routes, authentication);
buildReservationRoutes(routes, authentication);
export default routes;
