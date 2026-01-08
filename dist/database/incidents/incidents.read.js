"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncidentsByServiceIdDb = getIncidentsByServiceIdDb;
const prisma_1 = require("../../utils/prisma");
async function getIncidentsByServiceIdDb(serviceId, quantity) {
    try {
        const searchedIncidents = await prisma_1.prisma.incident.findMany({
            orderBy: { started_at: "desc" },
            where: { service_id: serviceId },
            take: quantity,
        });
        return searchedIncidents;
    }
    catch (error) {
        throw error;
    }
}
