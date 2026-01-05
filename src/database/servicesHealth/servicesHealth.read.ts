import { prisma } from "../../utils/prisma";

export async function searchServiceHealthByIdDb(serviceHealthId: number) {
    try {
        const searchedServiceHealth = prisma.serviceHealth.findUnique({
            where: {service_id: serviceHealthId}
        });
        return searchedServiceHealth;
    } catch (error: any) {
        throw error
    }
}