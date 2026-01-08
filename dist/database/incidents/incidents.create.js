"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIncidentDb = createIncidentDb;
const prisma_1 = require("../../utils/prisma");
async function createIncidentDb(serviceId, status, startedAt, reason) {
    try {
        const createdIncident = await prisma_1.prisma.incident.create({
            data: {
                service_id: serviceId,
                status: status,
                started_at: startedAt,
                reason: reason
            }
        });
        return createdIncident;
    }
    catch (error) {
        throw error;
    }
}
