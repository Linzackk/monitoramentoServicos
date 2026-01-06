import { IncidentStatus } from "../../prisma/prisma/enums";
import { prisma } from "../../utils/prisma";

export async function createIncidentDb(serviceId: number, status: IncidentStatus, startedAt: Date, reason?: string) {
    try {
        const createdIncident = await prisma.incident.create({
            data: {
                service_id: serviceId,
                status: status,
                started_at: startedAt,
                reason: reason
            }
        });
        return createdIncident;
    } catch (error: any) {
        throw error
    }
}