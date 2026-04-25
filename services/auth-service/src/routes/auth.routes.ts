import {
  loginHandler,
  refreshHandler,
  registerHanlder,
  revokeHandler,
} from "@/controllers/auth.controller";
import { validateRequest } from "@chatapp-node-microservice/common";
import { Router } from "express";
import {
  loginSchema,
  refreshSchema,
  registerSchema,
  revokeSchema,
} from "./auth.schema";

export const authRouter: Router = Router();

authRouter.post(
  "/register",
  validateRequest({ body: registerSchema.shape.body }),
  registerHanlder,
);
authRouter.post(
  "/login",
  validateRequest({ body: loginSchema.shape.body }),
  loginHandler,
);
authRouter.post(
  "/refresh",
  validateRequest({ body: refreshSchema.shape.body }),
  refreshHandler,
);
authRouter.post(
  "/revoke",
  validateRequest({ body: revokeSchema.shape.body }),
  revokeHandler,
);
