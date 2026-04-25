import { login, refreshTokens, revokeRefreshToken } from "@/services/auth.service";
import { LoginInput, RegisterInput } from "@/types/auth";
import { HttpError } from "@chatapp-node-microservice/common";
import { asyncHandler } from "@chatapp-node-microservice/common/src/http/async-handler";
import { RequestHandler } from "express";
import { register } from "node:module";

export const registerHanlder: RequestHandler<{}, any, RegisterInput> =
  asyncHandler(async (req, res) => {
    const tokens = await register(req.body);
    res.status(201).json(tokens);
  });


export const loginHandler: RequestHandler = asyncHandler(async (req, res) => {
  const payload = req.body as LoginInput;
  const tokens = await login(payload);
  res.json(tokens);
});

export const refreshHandler: RequestHandler = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body as { refreshToken?: string };
  if (!refreshToken) {
    throw new HttpError(400, "refreshToken is required");
  }
  const tokens = await refreshTokens(refreshToken);
  res.json(tokens);
});

export const revokeHandler: RequestHandler = asyncHandler(async (req, res) => {
  const { userId } = req.body as { userId?: string };
  if (!userId) {
    throw new HttpError(400, "userId is required");
  }
  await revokeRefreshToken(userId);
  res.status(204).send();
});