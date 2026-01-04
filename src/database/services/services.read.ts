import { prisma } from "../../utils/prisma";

export async function searchServiceByUrlDb(url: string) {
    try {
        const serviceSearched = await prisma.service.findFirst({
            where: {
                url: url
            }
        });
        return serviceSearched;
    } catch (error: any) {
        throw new Error(error);
    }
}