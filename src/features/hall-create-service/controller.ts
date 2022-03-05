import { Request, Response } from "express";
import { IService } from "./type";
import { hallCreateServiceService } from "./service";

const extract = (req: Request) => {
  const { name, duration, price } = req.body;
  const { userId } = req;
  return { name, duration, price, hall_id: userId } as IService;
};

export const hallCreateServiceController = async (
  req: Request,
  res: Response
) => {
  const dto = extract(req);
  const result = await hallCreateServiceService(dto);

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
