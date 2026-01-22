"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = void 0;
require("dotenv/config");
exports.redisConfig = {
    url: process.env.REDIS_URL,
};
