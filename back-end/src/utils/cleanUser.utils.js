export const cleanUser = (user) => {
  const { password, ...cleanedUser } = user.toObject();
  return cleanedUser;
};
