import { z } from '@chatapp-node-microservice/common';

export const conversationIdParamsSchema = z.object({
  id: z.string().uuid(),
});
