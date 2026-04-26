import { createUser, getAllUsers, getUser, searchUsers } from '@/controllers/user.controller';
import {
  createUserSchema,
  searchUsersQuerySchema,
  userIdParamsSchema,
} from '@/validation/user.schema';
import { asyncHandler } from '@chatapp-node-microservice/common/src/http/async-handler';
import { validateRequest } from '@chatapp-node-microservice/common/src/http/validate-request';
import { Router } from 'express';

export const userRoutes: Router = Router();

userRoutes.get('/', asyncHandler(getAllUsers));
userRoutes.get(
  '/search',
  validateRequest({ query: searchUsersQuerySchema }),
  asyncHandler(searchUsers),
);
userRoutes.get('/:id', validateRequest({ params: userIdParamsSchema }), asyncHandler(getUser));
userRoutes.post('/', validateRequest({ body: createUserSchema }), asyncHandler(createUser));
