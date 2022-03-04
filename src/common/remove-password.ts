import User from "../domain/user";

export const removePassword = (user: User) => {
  user.password = undefined;
  return user;
};
