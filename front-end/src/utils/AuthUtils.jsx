import AxiosInstanceUtils from './AxiosInstanceUtils';

const SignupUtils = async (data) => {
  try {
    const response = await AxiosInstanceUtils.post('/user/signup', data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const SigninUtils = async (data) => {
  try {
    const response = await AxiosInstanceUtils.post('/user/login', data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const CheckAuth = async () => {
  try {
    const response = await AxiosInstanceUtils.get('/user/isauthenticated');
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const RefreshTokens = async () => {
  try {
    const response = await AxiosInstanceUtils.post('user/refreshtokens', {});
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const LogoutUtils = async () => {
  try {
    const response = await AxiosInstanceUtils.post('user/logout', {});
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { SignupUtils, SigninUtils, CheckAuth, RefreshTokens, LogoutUtils };
