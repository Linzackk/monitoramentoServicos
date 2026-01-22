import "dotenv/config"
import IORedis from "ioredis";

export const redisConfig = {
  url: process.env.REDIS_URL!,
};