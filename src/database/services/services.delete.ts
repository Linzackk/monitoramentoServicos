import { prisma } from "../../utils/prisma";

export async function deleteServiceDb(serviceId: number) {
    try {
        const deletedService = await prisma.service.delete({
            where: {
                id: serviceId,
            }
        });
        return deletedService;
    } catch (error: any) {
        throw new Error(error)
    }
}