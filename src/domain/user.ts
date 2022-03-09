export type Address = {
  street: string;
  number: string;
  district: string;
  city: string;
};

export type Day = {
  start: string;
  end: string;
};

export type HallSchedules = {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
  hall_id: string;
};

export type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  photo?: string;
  cover?: string;
  type: string;
  address: Address;
  created_at?: Date;
  schedules?: HallSchedules;
};
