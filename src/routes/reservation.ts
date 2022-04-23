import { Router } from "express";
import { hallGetReservations } from "../features/hall-get-reservations";
import { userCreateReservation } from "../features/user-create-reservation";

const basepath = "/reservation";

export const buildReservationRoutes = (routes: Router, authentication: any) => {
  routes.post(`${basepath}`, authentication, userCreateReservation);
  routes.get(`${basepath}`, authentication, hallGetReservations);
};
