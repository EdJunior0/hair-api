import { model, Schema } from "mongoose";
import { Service } from "../../../domain/service";

const serviceSchema = new Schema<Service>({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
  hall_id: { type: String, required: true },
});

export const ServiceModel = model<Service>("Service", serviceSchema);
