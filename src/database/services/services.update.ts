import { UpdateService } from "../../utils/intefaces";
import { prisma } from "../../utils/prisma";

export async function updateServiceDb(serviceId: number, data: UpdateService) {
    try {
        const updatedService = prisma.service.update({
            where: {id: serviceId},
            data: data
        })
        return updatedService;
    } catch (error: any) {
        throw error;
    }
}