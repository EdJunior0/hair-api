import { SignIn } from "./type";
import userRepository from "../../infra/mongo/repositories/user";
import bcrypt from "bcryptjs";
import { generateToken } from "../../common/authenticate";
import { removePassword } from "../../common/remove-password";

export const signInService = async (dto: SignIn) => {
  const { email, password } = dto;

  try {
    const user = await userRepository.findOneWithPassword(email);
    if (!user) return new Error("user not found");
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) return new Error("invalid password");
    const token = await generateToken(user.id);
    return { user: removePassword(user), token };
  } catch (err) {
    return new Error("registration failed");
  }
};
