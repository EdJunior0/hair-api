import { Router } from "express";
import { signUp } from "../features/sign-up";
import { signIn } from "../features/sign-in";

const basepath = "/auth";

export const buildAuthRoutes = (routes: Router) => {
  routes.post(`${basepath}/sign-up`, signUp);
  routes.post(`${basepath}/sign-in`, signIn);
};
