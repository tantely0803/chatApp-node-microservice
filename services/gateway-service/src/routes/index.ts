import type { Router } from 'express';
import { authRouter } from './auth.routes';
import { userRouter } from './user.routes';

export const registerRoutes = (app: Router): void => {
  app.use('/auth', authRouter);
  app.use('/users', userRouter);
};
