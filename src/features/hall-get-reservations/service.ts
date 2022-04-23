import { IService } from "./type";
import reservationRepository from "../../infra/mongo/repositories/reservation";
import userRepository from "../../infra/mongo/repositories/user";

export const hallGetReservationsService = async (dto: IService) => {
  const { hall_id } = dto;
  try {
    const hall = await userRepository.findOne({ _id: hall_id });
    console.log("hall", hall);
    if (!hall) return new Error("user not found");
    const reservations = await reservationRepository.find({ hall_id });
    return reservations;
  } catch (err) {
    return new Error("failed to get reservations");
  }
};
