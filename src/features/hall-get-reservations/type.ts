import { Reservation } from "../../domain/reservation";

export type IReservation = Pick<Reservation, "hall_id">;
