"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIncidentDb = updateIncidentDb;
const prisma_1 = require("../../utils/prisma");
async function updateIncidentDb(incidentId, endedAt, durationSeconds, reason) {
    try {
        const updatedIncident = await prisma_1.prisma.incident.update({
            where: { id: incidentId },
            data: {
                ended_at: endedAt,
                duration_seconds: durationSeconds,
                reason: reason
            }
        });
        return updatedIncident;
    }
    catch (error) {
        throw error;
    }
}
