const defaultPath = '/api/v1';
const saltRounds = 10;
const setCookieOption = (min, day) => {
  const option = {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
  };
  if (day) {
    option.maxAge = day * 24 * 60 * 60 * 1000;
  }
  if (min) {
    option.maxAge = min * 60 * 1000;
  }
  return option;
};
export { defaultPath, saltRounds, setCookieOption };
