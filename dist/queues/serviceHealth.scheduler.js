"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServiceHealthScheduler = startServiceHealthScheduler;
const utilNumbers_1 = require("../utils/utilNumbers");
const serviceHealth_queue_1 = require("./serviceHealth.queue");
async function startServiceHealthScheduler() {
    await serviceHealth_queue_1.serviceHealthQueue.add("check-services", {}, {
        jobId: "service-health-scheduler",
        repeat: { every: utilNumbers_1.checkServicesMs }
    });
}
