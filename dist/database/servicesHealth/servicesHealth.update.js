"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServiceHealthDb = updateServiceHealthDb;
const prisma_1 = require("../../utils/prisma");
async function updateServiceHealthDb(serviceId, currentStatus, lastChecked, lastResponseTimeMs) {
    const updatedService = await prisma_1.prisma.serviceHealth.update({
        where: { service_id: serviceId },
        data: {
            current_status: currentStatus,
            last_checked_at: lastChecked,
            last_response_time_ms: lastResponseTimeMs
        }
    });
    return updatedService;
}
