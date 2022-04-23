import { IService } from "./type";
import serviceRepository from "../../infra/mongo/repositories/service";
import userRepository from "../../infra/mongo/repositories/user";

export const hallGetServicesService = async (dto: IService) => {
  const { hall_id } = dto;
  try {
    const hall = await userRepository.findOne({ _id: hall_id });
    console.log("hall", hall);
    if (!hall) return new Error("user not found");
    if (hall.type != "hall") return new Error("user not allowed");
    const services = await serviceRepository.find({ hall_id });
    return services;
  } catch (err) {
    return new Error("failed to get services");
  }
};
