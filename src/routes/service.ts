import { Router, NextFunction, Request, Response } from "express";
import { hallCreateService } from "../features/hall-create-service";
import jwt from "jsonwebtoken";

const basepath = "/service";

export const buildServiceRoutes = (routes: Router, authentication: any) => {
  routes.post(`${basepath}`, authentication, hallCreateService);
};
