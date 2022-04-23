import { Request, Response } from "express";
import { IService } from "./type";
import { hallGetServicesService } from "./service";

const extract = (req: Request) => {
  const { userId } = req;
  return { hall_id: userId } as IService;
};

export const hallGetServicesController = async (
  req: Request,
  res: Response
) => {
  const dto = extract(req);
  const result = await hallGetServicesService(dto);

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
