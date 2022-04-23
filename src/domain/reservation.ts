export type DateReservation = {
  hour: string;
  date: string;
};

export type Contact = {
  name: string;
  phone: string;
  email?: string;
};

export type Reservation = {
  hall_id: string;
  date: DateReservation;
  service_id: string;
  contact: Contact;
};
