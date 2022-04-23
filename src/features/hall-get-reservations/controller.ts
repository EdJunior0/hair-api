import { Request, Response } from "express";
import { IReservation } from "./type";
import { hallGetReservationsService } from "./service";

const extract = (req: Request) => {
  const { userId } = req;
  return { hall_id: userId } as IReservation;
};

export const hallGetReservationsController = async (
  req: Request,
  res: Response
) => {
  const dto = extract(req);
  const result = await hallGetReservationsService(dto);

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
