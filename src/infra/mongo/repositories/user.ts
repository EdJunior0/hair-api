import { UserModel } from "../models/user";
import { User } from "../../../domain/user";
import bcrypt from "bcryptjs";

const create = async (body: User) => {
  const { password } = body;
  const hash = await bcrypt.hash(password, 10);
  const result = await UserModel.create({ ...body, password: hash });
  return result;
};

const find = async () => {
  const result = await UserModel.find();
  return result;
};

const findOne = async (filter: any) => {
  const result = await UserModel.findOne(filter);
  return result;
};

const findOneWithPassword = async (filter: any) => {
  const result = await UserModel.findOne(filter).select("+password");
  return result;
};

export default {
  create,
  find,
  findOne,
  findOneWithPassword,
};
