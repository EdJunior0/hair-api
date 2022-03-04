import { Request, Response } from "express";
import { SignUp } from "./type";
import { signUpService } from "./service";

const extract = (req: Request) => {
  const { name, email, password, phone, photo, cover, type, address } = req.body;

  return { name, email, password, phone, photo, cover, type, address } as SignUp;
};

export const signUpController = async (req: Request, res: Response) => {
  const dto = extract(req);
  const result = await signUpService(dto);

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
