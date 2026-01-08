"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = void 0;
require("dotenv/config");
exports.redisConfig = {
    host: process.env.REDIS_CONFIG,
    port: Number(process.env.REDIS_PORT)
};
