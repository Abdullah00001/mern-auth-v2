import { UserModel } from '../models/user.models.js';
import { errorApiResponse } from '../utils/apiresponse.utils.js';
import bcrypt from 'bcrypt';
import { verifyAccessToken, verifyRefreshToken } from '../utils/jwt.utils.js';

export const authFieldValidation = (req, res, next) => {
  const { username, password } = req.body;
  if (!username && !password) {
    return res
      .status(400)
      .json(new errorApiResponse('Username And Password Required', null));
  }
  if (!username) {
    return res
      .status(400)
      .json(new errorApiResponse('Username Required', null));
  }
  if (!password) {
    return res
      .status(400)
      .json(new errorApiResponse('Password Required', null));
  }
  return next();
};

export const isSignupUserExist = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await UserModel.findOne({ username });
    if (user) {
      return res
        .status(409)
        .json(
          new errorApiResponse(
            `User With This username:${username} Already Exist`,
            null
          )
        );
    }
    return next();
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export const isLoginUserExist = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await UserModel.findOne({ username });
    if (user) {
      req.user = user;
      return next();
    }
    return res
      .status(404)
      .json(
        new errorApiResponse(
          `User With This username:${username} Not Found`,
          null
        )
      );
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export const passwordCheck = async (req, res, next) => {
  try {
    const { password } = req.body;
    const isPasswordValid = await bcrypt.compare(password, req.user.password);
    if (isPasswordValid) {
      return next();
    }
    return res
      .status(400)
      .json(new errorApiResponse('Incorrect Password', null));
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export const isUserAuthenticate = (req, res, next) => {
  try {
    const token = req.cookies.accesstoken;
    if (!token) {
      return res
        .status(401)
        .json(new errorApiResponse('Accesstoken Is Missing', null));
    }
    const decoded = verifyAccessToken(token);
    if (!decoded) {
      return res
        .status(401)
        .json(new errorApiResponse('Accesstoken Is Expired', null));
    }
    req.id = decoded;
    return next();
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export const checkRefreshToken = async (req, res, next) => {
  try {
    const token = req.cookies.refreshtoken;
    if (!token) {
      return res
        .status(401)
        .json(new errorApiResponse('Refreshtoken Is Missing', null));
    }
    const decoded = verifyRefreshToken(token);
    if (!decoded) {
      return res
        .status(401)
        .json(new errorApiResponse('Refreshtoken Is Expired', null));
    }
    const user = await UserModel.findById(decoded);
    if (!user || token !== user.refreshToken) {
      return res
        .status(401)
        .json(new errorApiResponse('Unauthorized User', null));
    }
    req.userId = user._id;
    return next();
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};
