import { Request, Response } from "express";
import { IService } from "./type";
import { hallUpdateServiceService } from "./service";

const extract = (req: Request) => {
  const { name, duration, price } = req.body;
  const { service_id } = req.params;
  const { userId } = req;
  return { name, duration, price, hall_id: userId, service_id } as IService;
};

export const hallUpdateServiceController = async (
  req: Request,
  res: Response
) => {
  const dto = extract(req);
  const result = await hallUpdateServiceService(dto);

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
