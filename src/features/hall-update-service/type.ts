import { Service } from "../../domain/service";

export type IService = {
  hall_id?: string | undefined;
  service_id?: string;
  name?: string;
  duration?: string;
  price?: string;
};
