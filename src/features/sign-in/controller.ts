import { Request, Response } from "express";
import { SignIn } from "./type";
import { signInService } from "./service";

const extract = (req: Request) => {
  const { email, password } = req.body;

  return { email, password } as SignIn;
};

export const signInController = async (req: Request, res: Response) => {
  const dto = extract(req);
  const result = await signInService(dto);

  if (result instanceof Error) {
    return res.status(404).json({
      error: {
        code: result.name,
        message: result.message,
      },
    });
  }
  res.status(200).json(result);
};
