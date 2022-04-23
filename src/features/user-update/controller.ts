import { Request, Response } from "express";
import { UserUpdate } from "./type";
import { userUpdateService } from "./service";

const extract = (req: Request) => {
  const { name, phone, photo, cover, address, type, schedules } = req.body;

  return {
    id: req.userId,
    name,
    phone,
    photo,
    cover,
    address,
    type,
    schedules,
  } as UserUpdate;
};

export const userUpdateController = async (req: Request, res: Response) => {
  const dto = extract(req);
  const result = await userUpdateService(dto);

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
