import { UserModel } from '../models/user.models.js';
import { errorApiResponse } from '../utils/apiresponse.utils.js';
import bcrypt from 'bcrypt';

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
