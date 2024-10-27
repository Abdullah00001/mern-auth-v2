import { Router } from 'express';

const router = Router();

/* ====================================
-------------MIDDLEWARES---------------
=======================================*/
import {
  authFieldValidation,
  checkRefreshToken,
  isLoginUserExist,
  isSignupUserExist,
  isUserAuthenticate,
  passwordCheck,
} from '../middlewares/auth.middlewares.js';

/* ====================================
-------------Controllers---------------
=======================================*/
import { signupController } from '../controllers/signup.controllers.js';
import signinController from '../controllers/signin.controllers.js';
import authenticatedController from '../controllers/authenticated.controllers.js';
import refreshTokensController from '../controllers/refreshTokens.controllers.js';
import LogoutController from '../controllers/logout.controllers.js';

/* ======================================
-------------------Routes----------------
=========================================*/
router
  .route('/signup')
  .post(authFieldValidation, isSignupUserExist, signupController);
router
  .route('/login')
  .post(authFieldValidation, isLoginUserExist, passwordCheck, signinController);

/* ======================================
--------------Protected Routes-----------
======================================== */

router
  .route('/isauthenticated')
  .get(isUserAuthenticate, authenticatedController);

router.route('/logout').post(isUserAuthenticate, LogoutController);

router.route('/refreshtokens').post(checkRefreshToken, refreshTokensController);

export default router;
