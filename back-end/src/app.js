import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { defaultPath } from './constant.js';

const app = express();

/* ========================================
--------Configurration Middleware---------
=========================================== */

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());

/* ====================================
---------------END POINTS--------------
======================================*/

import UserRouter from './routes/user.routes.js';

app.use(`${defaultPath}/user`, UserRouter);

export default app;
