import { UserUpdate } from "./type";
import userRepository from "../../infra/mongo/repositories/user";
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
    if (dto?.photo) {
      const imageOfCloudinary = await upload_photo(dto?.photo);
      dto.photo = imageOfCloudinary;
    }
    if (dto?.cover) {
      const imageOfCloudinary = await upload_photo(dto?.cover);
      dto.cover = imageOfCloudinary;
    }
    const updated = await userRepository.update({ _id: id }, dto);
    return updated;
  } catch (err) {
    return new Error("failed to update service");
  }
};
