import bcrypt from 'bcrypt';
import { saltRounds } from '../constant.js';
import { UserModel } from '../models/user.models.js';
import { successApiResponse } from '../utils/apiresponse.utils.js';
import { cleanUser } from '../utils/cleanUser.utils.js';

export const signupController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const encryptedPaddowrd = await bcrypt.hash(password, saltRounds);
    const newUser = new UserModel({ username, password: encryptedPaddowrd });
    await newUser.save();
    return res
      .status(201)
      .json(
        new successApiResponse('User Created Successfully', cleanUser(newUser))
      );
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};
