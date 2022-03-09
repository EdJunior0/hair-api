import { UserUpdate } from "./type";
import userRepository from "../../infra/mongo/repositories/user";
import { generateToken } from "../../common/authenticate";
import { removePassword } from "../../common/remove-password";
import { upload_photo } from "../../external-services/cloudinary";

export const userUpdateService = async (dto: UserUpdate) => {
  const { id } = dto;
  delete dto.id;
  try {
    const user = await userRepository.findOne({ _id: id });
    if (!user) return new Error("user not found");
    if (dto?.schedules) {
      if (user?.type == "hall") {
        const updated = await userRepository.update({ _id: id }, dto);
        return updated;
      } else {
        return new Error("user not add schedules");
      }
    }
    const updated = await userRepository.update({ _id: id }, dto);
    return updated;
  } catch (err) {
    return new Error("registration failed");
  }
};
