import { prisma } from "../../utils/prisma";

export async function updateIncidentDb(incidentId: number, endedAt?: Date, durationSeconds?: number, reason?: string) {
    try {
        const updatedIncident = await prisma.incident.update({
            where: {id: incidentId},
            data: {
                ended_at: endedAt,
                duration_seconds: durationSeconds,
                reason: reason
            }
        });
        return updatedIncident;
    } catch (error: any) {
        throw error;
    }
}