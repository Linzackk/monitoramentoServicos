import { prisma } from "../../utils/prisma";

export async function deleteServiceHealthDb(serviceId: number) {
    try {
        const deletedServiceHealth = await prisma.serviceHealth.delete({
            where: {
                service_id: serviceId,
            }
        });
        return deletedServiceHealth;
    } catch (error: any) {
        throw new Error(error)
    }
}