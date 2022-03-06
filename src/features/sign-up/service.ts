import { SignUp } from "./type";
import userRepository from "../../infra/mongo/repositories/user";
import { generateToken } from "../../common/authenticate";
import { removePassword } from "../../common/remove-password";
import { upload_photo } from "../../external-services/cloudinary";

export const signUpService = async (dto: SignUp) => {
  const { email } = dto;

  try {
    const user = await userRepository.findOne({ email });
    if (user) return new Error("user already registered");
    if (dto?.photo) {
      const imageOfCloudinary = await upload_photo(dto?.photo);
      dto.photo = imageOfCloudinary;
    }
    if (dto?.cover) {
      const imageOfCloudinary = await upload_photo(dto?.cover);
      dto.cover = imageOfCloudinary;
    }
    const result = await userRepository.create(dto);
    const token = await generateToken(result.id);
    return { user: removePassword(result), token };
  } catch (err) {
    return new Error("registration failed");
  }
};
