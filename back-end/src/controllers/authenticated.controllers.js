import { successApiResponse } from '../utils/apiresponse.utils.js';

const authenticatedController = (req, res) => {
  try {
    return res
      .status(200)
      .json(new successApiResponse('Authenticated User', { userId: req.id }));
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json(new errorApiResponse('Internal Server Error', null));
  }
};

export default authenticatedController;
