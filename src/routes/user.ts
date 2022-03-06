import { Router } from "express";
import { userUpdate } from "../features/user-update";

const basepath = "/user";

export const buildUserRoutes = (routes: Router, authentication: any) => {
  routes.patch(`${basepath}`, authentication, userUpdate);
};
