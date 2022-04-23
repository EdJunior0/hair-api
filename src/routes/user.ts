import { Router } from "express";
import { userGet } from "../features/user-get";
import { userUpdate } from "../features/user-update";

const basepath = "/user";

export const buildUserRoutes = (routes: Router, authentication: any) => {
  routes.get(`${basepath}/:id`, authentication, userGet);
  routes.patch(`${basepath}`, authentication, userUpdate);
};
