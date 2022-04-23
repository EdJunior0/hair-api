import { Address, HallSchedules } from "../../domain/user";

export type UserUpdate = {
  id?: string;
  name?: string;
  phone?: string;
  photo?: string | undefined;
  cover?: string | undefined;
  address?: Address;
  type?: string;
  schedules?: HallSchedules;
};
