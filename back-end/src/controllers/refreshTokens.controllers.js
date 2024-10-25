import { setCookieOption } from '../constant.js';
import { UserModel } from '../models/user.models.js';
import { successApiResponse } from '../utils/apiresponse.utils.js';
import {
  accessTokenGenerator,
  refreshTokenGenerator,
} from '../utils/jwt.utils.js';

const refreshTokensController = async (req, res) => {
  try {
    const id = req.userId;
    const refreshToken = refreshTokenGenerator(id);
    const accessToken = accessTokenGenerator(id);
    await UserModel.findByIdAndUpdate(id, {
      $set: {
        refreshToken,
      },
    });
    return res
      .status(200)
      .cookie('accesstoken', accessToken, setCookieOption(15, null))
      .cookie('refreshtoken', refreshToken, setCookieOption(null, 7))
      .json(new successApiResponse('Tokens Refresh Successful', null));
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export default refreshTokensController;
