"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServiceHealthDb = createServiceHealthDb;
const prisma_1 = require("../../utils/prisma");
async function createServiceHealthDb(serviceId) {
    try {
        const newServiceHealth = await prisma_1.prisma.serviceHealth.create({
            data: {
                service_id: serviceId,
                current_status: "ONLINE",
                last_checked_at: new Date()
            }
        });
        return newServiceHealth;
    }
    catch (error) {
        throw new Error(error);
    }
}
