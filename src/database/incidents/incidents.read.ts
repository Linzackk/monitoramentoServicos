import { prisma } from "../../utils/prisma";

export async function getIncidentsByIdDb(serviceId: number, quantity: number) {
    try {
        const searchedIncidents = await prisma.incident.findMany({
            orderBy: {started_at: "desc"},
            where: {service_id: serviceId},
            take: quantity,
        });
        return searchedIncidents;
    } catch (error: any) {
        throw error
    }
}