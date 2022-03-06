import { Router } from "express";
import { hallCreateService } from "../features/hall-create-service";

const basepath = "/service";

export const buildServiceRoutes = (routes: Router, authentication: any) => {
  routes.post(`${basepath}`, authentication, hallCreateService);
};
