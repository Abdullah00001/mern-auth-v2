import jwt from 'jsonwebtoken';

const accessTokenGenerator = (user_id) => {
  try {
    const token = jwt.sign({ user_id }, process.env.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: '1h',
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    return decoded.user_id;
  } catch (error) {
    console.error('Access Token Expired Or Invalid');
    return null;
  }
};

const refreshTokenGenerator = (user_id) => {
  try {
    const token = jwt.sign({ user_id }, process.env.REFRESH_TOKEN_SECRET_KEY, {
      expiresIn: '7d',
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const verifyRefreshToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET_KEY);
    return decoded.user_id;
  } catch (error) {
    console.error('Refresh Token Expired Or Invalid');
    return null;
  }
};

export {
  accessTokenGenerator,
  verifyAccessToken,
  refreshTokenGenerator,
  verifyRefreshToken,
};
