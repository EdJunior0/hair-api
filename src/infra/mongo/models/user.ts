import { model, Schema } from "mongoose";
import { User, Address } from "../../../domain/user";

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  number: { type: String, required: true },
  district: { type: String, required: true },
  city: { type: String, required: true },
});

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  phone: { type: String, required: false },
  photo: { type: String, required: false },
  type: { type: String, required: false },
  cover: { type: String, required: false },
  address: addressSchema,
  created_at: { type: Date, default: Date.now },
});

export const UserModel = model<User>("User", userSchema);
