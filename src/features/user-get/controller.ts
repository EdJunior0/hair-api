import { Request, Response } from "express";
import { UserGet } from "./type";
import { userGetService } from "./service";

const extract = (req: Request) => {
  const { id } = req.params;
  return {
    id,
  } as UserGet;
};

export const userGetController = async (req: Request, res: Response) => {
  const dto = extract(req);
  const result = await userGetService(dto);

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
