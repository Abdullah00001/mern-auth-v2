import { Router } from 'express';

const router = Router();

/* ====================================
-------------MIDDLEWARES---------------
=======================================*/
import {
  authFieldValidation,
  isLoginUserExist,
  isSignupUserExist,
  passwordCheck,
} from '../middlewares/auth.middlewares.js';

/* ====================================
-------------Controllers---------------
=======================================*/
import { signupController } from '../controllers/signup.controllers.js';
import signinController from '../controllers/signin.controllers.js';

/* ======================================
-------------------Routes----------------
=========================================*/
router
  .route('/signup')
  .post(authFieldValidation, isSignupUserExist, signupController);
router
  .route('/login')
  .post(authFieldValidation, isLoginUserExist, passwordCheck, signinController);

export default router;
