import { Router } from "express";
import { hallCreateService } from "../features/hall-create-service";
import { hallUpdateService } from "../features/hall-update-service";
import { hallGetServices } from "../features/hall-get-services";
import { hallDeleteService } from "../features/hall-delete-service";

const basepath = "/service";

export const buildServiceRoutes = (routes: Router, authentication: any) => {
  routes.post(`${basepath}`, authentication, hallCreateService);
  routes.get(`${basepath}`, authentication, hallGetServices);
  routes.patch(`${basepath}/:service_id`, authentication, hallUpdateService);
  routes.delete(`${basepath}/:service_id`, authentication, hallDeleteService);
};
