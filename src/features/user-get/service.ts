import { UserGet } from "./type";
import userRepository from "../../infra/mongo/repositories/user";

export const userGetService = async (dto: UserGet) => {
  const { id } = dto;
  try {
    const user = await userRepository.findOne({ _id: id });
    if (!user) return new Error("user not found");
    return user;
  } catch (err) {
    return new Error("failed to get user");
  }
};
