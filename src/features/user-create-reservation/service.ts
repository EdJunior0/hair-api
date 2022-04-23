import { IReservation } from "./type";
import reservationRepository from "../../infra/mongo/repositories/reservation";
import userRepository from "../../infra/mongo/repositories/user";

export const userCreateReservationService = async (dto: IReservation) => {
  const { hall_id } = dto;
  try {
    const hall = await userRepository.findOne({ _id: hall_id });
    console.log("hall", hall);
    if (!hall) return new Error("user not found");
    const reservation = await reservationRepository.create(dto);
    return reservation;
  } catch (err) {
    return new Error("create reservation failed");
  }
};
