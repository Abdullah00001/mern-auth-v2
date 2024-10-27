import { setCookieOption } from '../constant.js';
import { UserModel } from '../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../utils/apiresponse.utils.js';

const LogoutController = async (req, res) => {
  try {
    const id = req.id;
    await UserModel.findByIdAndUpdate(id, {
      $set: {
        refreshToken: null,
      },
    });
    return res
      .status(200)
      .clearCookie('accesstoken', setCookieOption)
      .clearCookie('refreshtoken', setCookieOption)
      .json(new successApiResponse('Logout Successful', null));
  } catch (error) {
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export default LogoutController;
