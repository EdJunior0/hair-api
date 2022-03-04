export type Address = {
  street: string;
  number: string;
  district: string;
  city: string;
};

export type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
  photo: string;
  cover: string;
  type: string;
  address: Address;
  created_at?: Date;
};
