import { createLogger } from "@chatapp-node-microservice/common";
import type { Logger } from "@chatapp-node-microservice/common";

export const logger: Logger = createLogger({ name: "auth-service" });
