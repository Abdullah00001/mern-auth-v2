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

export default SignupUtils;
