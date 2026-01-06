import { Queue } from "bullmq";
import { redisConfig } from "./redis";

export const serviceHealthQueue = new Queue("service-health", {
    connection: redisConfig
});