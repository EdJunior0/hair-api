import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { secret } from "../config/auth.json";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).send({ error: "no token provider" });

  const payload = jwt.verify(authorization, secret) as any;

  req.userId = payload?.id;
  return next();
};
