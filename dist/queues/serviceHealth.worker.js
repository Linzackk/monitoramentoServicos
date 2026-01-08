"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const redis_1 = require("./redis");
const services_read_1 = require("../database/services/services.read");
const servicesHealth_services_1 = require("../services/servicesHealth.services");
new bullmq_1.Worker("service-health", async () => {
    const services = await (0, services_read_1.searchAllServicesDb)();
    await (0, servicesHealth_services_1.checkAllServices)(services);
}, {
    connection: redis_1.redisConfig
});
