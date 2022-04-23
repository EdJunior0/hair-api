import { model, Schema } from "mongoose";
import { User, Address, HallSchedules, Day } from "../../../domain/user";

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  number: { type: String, required: true },
  district: { type: String, required: true },
  city: { type: String, required: true },
});

const daySchema = new Schema<Day>({
  start: { type: String, required: true },
  end: { type: String, required: true },
});

const schedulesSchema = new Schema<HallSchedules>({
  monday: { type: daySchema, required: false },
  tuesday: { type: daySchema, required: false },
  wednesday: { type: daySchema, required: false },
  thursday: { type: daySchema, required: false },
  friday: { type: daySchema, required: false },
  saturday: { type: daySchema, required: false },
  sunday: { type: daySchema, required: false },
  hall_id: { type: String, required: false },
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
  schedules: { type: schedulesSchema, required: false },
  created_at: { type: Date, default: Date.now },
});

export const UserModel = model<User>("User", userSchema);
