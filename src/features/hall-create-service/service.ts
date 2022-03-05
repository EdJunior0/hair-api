import { IService } from "./type";
import serviceRepository from "../../infra/mongo/repositories/service";
import userRepository from "../../infra/mongo/repositories/user";

export const hallCreateServiceService = async (dto: IService) => {
  const { hall_id } = dto;
  try {
    const hall = await userRepository.findOne({ _id: hall_id });
    console.log("hall", hall);
    if (!hall) return new Error("user not found");
    if (hall.type != "hall") return new Error("user not allowed");
    const service = await serviceRepository.create(dto);
    return service;
  } catch (err) {
    return new Error("create service failed");
  }
};
