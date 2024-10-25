import { setCookieOption } from '../constant.js';
import { UserModel } from '../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../utils/apiresponse.utils.js';
import { cleanUser } from '../utils/cleanUser.utils.js';
import {
  accessTokenGenerator,
  refreshTokenGenerator,
} from '../utils/jwt.utils.js';

/* 
=================Login Algorithm===============
------[1] first we check input validation
------[2] than we check is user exist or not
------[3] if exist we will send the to checkPassword middleware
------[4] in middleware we check the user password
------[5] if match than we will sent it to sigin controller
------[6] in controller we generate access and refrsh tokens
------[7] than set it to cookies and sent the response
------[8] if password didnt match we will sent api error response
=================================================
*/
const signinController = async (req, res) => {
  try {
    const accessToken = accessTokenGenerator(req.user._id);
    const refreshToken = refreshTokenGenerator(req.user._id);
    if (!accessToken && !refreshToken) {
      return res
        .status(500)
        .json(new errorApiResponse('Internal Server Error'));
    }
    const user = await UserModel.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          refreshToken,
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .cookie('accesstoken', accessToken, setCookieOption(30, null))
      .cookie('refreshtoken', refreshToken, setCookieOption(null, 7))
      .json(new successApiResponse('Login Succeessful', cleanUser(user)));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export default signinController;
