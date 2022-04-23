import { model, Schema } from "mongoose";
import {
  Reservation,
  DateReservation,
  Contact,
} from "../../../domain/reservation";

const dateSchema = new Schema<DateReservation>({
  hour: { type: String, require: true },
  date: { type: String, require: true },
});

const contactSchema = new Schema<Contact>({
  name: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: false },
});

const reservationSchema = new Schema<Reservation>({
  hall_id: { type: String, required: true },
  date: { type: dateSchema, require: true },
  service_id: { type: String, require: true },
  contact: { type: contactSchema, require: true },
});

export const ReservationModel = model<Reservation>(
  "Reservation",
  reservationSchema
);
