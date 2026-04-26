import type { AuthenticatedUser } from '@chatapp-node-microservice/common';

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

export {};
