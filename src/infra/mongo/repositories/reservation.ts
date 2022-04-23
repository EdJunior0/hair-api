import { ReservationModel } from "../models/reservation";
import { Reservation } from "../../../domain/reservation";

type Filter = {
  hall_id?: string;
  reservation_id?: string;
};

const create = async (body: Reservation) => {
  const result = ReservationModel.create(body);
  return result;
};

const find = async (filter: Filter) => {
  const result = await ReservationModel.find(filter);
  return result;
};

export default {
  create,
  find,
};
