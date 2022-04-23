import { IService } from "./type";
import serviceRepository from "../../infra/mongo/repositories/service";
import userRepository from "../../infra/mongo/repositories/user";

export const hallUpdateServiceService = async (dto: IService) => {
  const { hall_id, service_id } = dto;
  delete dto.hall_id, dto.service_id;
  try {
    const hall = await userRepository.findOne({ _id: hall_id });
    if (!hall) return new Error("user not found");
    if (hall.type != "hall") return new Error("user not allowed");
    const service = await serviceRepository.findOne({ service_id });
    if (!service) return new Error("service not found");
    const serviceUpdated = await serviceRepository.update({ service_id }, dto);
    return serviceUpdated;
  } catch (err) {
    return new Error("updated service failed");
  }
};
