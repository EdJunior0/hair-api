import { Request, Response } from "express";
import { IService } from "./type";
import { hallDeleteServiceService } from "./service";

const extract = (req: Request) => {
  const { service_id } = req.params;
  const { userId } = req;
  return { hall_id: userId, service_id } as IService;
};

export const hallDeleteServiceController = async (
  req: Request,
  res: Response
) => {
  const dto = extract(req);
  const result = await hallDeleteServiceService(dto);

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
