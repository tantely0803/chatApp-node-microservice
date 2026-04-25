import type { Router } from 'express';
import { authRouter } from './auth.routes';

export const registerRoutes = (app: Router): void => {
  app.use('/auth', authRouter);
};
