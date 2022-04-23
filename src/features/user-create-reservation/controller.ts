import { Request, Response } from "express";
import { IReservation } from "./type";
import { userCreateReservationService } from "./service";

const extract = (req: Request) => {
  const { date, service_id, contact } = req.body;
  const { userId } = req;
  return { date, service_id, contact, hall_id: userId } as IReservation;
};

export const userCreateReservationController = async (
  req: Request,
  res: Response
) => {
  const dto = extract(req);
  const result = await userCreateReservationService(dto);

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
