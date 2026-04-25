import {
  loginUser,
  refreshTokens,
  registerUser,
  revokeTokens,
} from '@/controllers/auth.controller';
import { loginSchema, refreshSchema, registerSchema, revokeSchema } from '@/validation/auth.schema';
import { validateRequest } from '@chatapp-node-microservice/common';
import { asyncHandler } from '@chatapp-node-microservice/common/src/http/async-handler';
import { Router } from 'express';

export const authRouter: Router = Router();

authRouter.post('/register', validateRequest({ body: registerSchema }), asyncHandler(registerUser));
authRouter.post('/login', validateRequest({ body: loginSchema }), asyncHandler(loginUser));
authRouter.post('/refresh', validateRequest({ body: refreshSchema }), asyncHandler(refreshTokens));
authRouter.post('/revoke', validateRequest({ body: revokeSchema }), asyncHandler(revokeTokens));
