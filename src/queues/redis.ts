import "dotenv/config"

export const redisConfig = {
  host: process.env.REDIS_CONFIG,
  port: Number(process.env.REDIS_PORT)
};