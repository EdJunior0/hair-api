import { IService } from "./type";
import serviceRepository from "../../infra/mongo/repositories/service";
import userRepository from "../../infra/mongo/repositories/user";

export const hallDeleteServiceService = async (dto: IService) => {
  const { hall_id, service_id } = dto;
  delete dto.hall_id, dto.service_id;
  try {
    const hall = await userRepository.findOne({ _id: hall_id });
    if (!hall) return new Error("user not found");
    if (hall.type != "hall") return new Error("user not allowed");
    const service = await serviceRepository.findOne({ service_id });
    if (!service) return new Error("service not found");
    const serviceUpdated = await serviceRepository.findAndDelete({
      service_id,
    });
    return { message: "service deleted!" };
  } catch (err) {
    return new Error("delete service failed");
  }
};
