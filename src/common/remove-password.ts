type UserType = {
  password: string | undefined;
};

export const removePassword = (user: UserType) => {
  user.password = undefined;
  return user;
};
