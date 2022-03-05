import { SignUp } from "./type";
import userRepository from "../../infra/mongo/repositories/user";
import { generateToken } from "../../common/authenticate";
import { removePassword } from "../../common/remove-password";
import { s3_service } from "../../external-services/aws";

export const signUpService = async (dto: SignUp) => {
  const { email } = dto;

  try {
    const user = await userRepository.findOne({ email });
    if (user) return new Error("user already registered");
    if (dto?.photo) {
      const imageOfS3 = await s3_service(dto?.photo);
      dto.photo = imageOfS3.key;
    }
    if (dto?.cover) {
      const imageOfS3 = await s3_service(dto?.cover);
      dto.cover = imageOfS3.key;
    }
    const result = await userRepository.create(dto);
    const token = await generateToken(result.id);
    return { user: removePassword(result), token };
  } catch (err) {
    return new Error("registration failed");
  }
};
