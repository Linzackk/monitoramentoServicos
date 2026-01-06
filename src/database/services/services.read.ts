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

export async function searchServiceByIdDb(id: number) {
    try {
        const serviceSearched = await prisma.service.findUnique({
            where: {
                id: id,
            }
        });
        return serviceSearched;
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function searchAllServicesDb() {
    const services = await prisma.service.findMany();
    return services;
}