"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceHealthQueue = void 0;
const bullmq_1 = require("bullmq");
const redis_1 = require("./redis");
exports.serviceHealthQueue = new bullmq_1.Queue("service-health", {
    connection: redis_1.redisConfig
});
