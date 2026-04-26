import type { Router } from 'express';
import { authRouter } from './auth.routes';
import { userRouter } from './user.routes';
import { conversationRouter } from './conversation.routes';

export const registerRoutes = (app: Router): void => {
  app.use('/auth', authRouter);
  app.use('/users', userRouter);
  app.use('/conversations', conversationRouter);
};
