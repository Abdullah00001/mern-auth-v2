import { Router } from 'express';

const router = Router();

/* ====================================
-------------MIDDLEWARES---------------
=======================================*/
import {
  authFieldValidation,
  isLoginUserExist,
  isSignupUserExist,
} from '../middlewares/auth.middlewares.js';

/* ====================================
-------------Controllers---------------
=======================================*/
import { signupController } from '../controllers/signup.controllers.js';

/* ======================================
-------------------Routes----------------
=========================================*/
router
  .route('/signup')
  .post(authFieldValidation, isSignupUserExist, signupController);

export default router;
