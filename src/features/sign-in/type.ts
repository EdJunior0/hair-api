import { User } from "../../domain/user";

export type SignIn = Pick<User, "email", "password">;
