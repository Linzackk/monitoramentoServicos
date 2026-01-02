import { prisma } from "../../utils/prisma";

export async function createServiceDb (
    name: string,
    url: string,
    environment: "DEV"  | "STATINGS" | "PROD",
) {
    try {
        const newService = await prisma.service.create({
            data: {
                name: name,
                url: url,
                environment: environment
            }
        });
        return newService;
    }
    catch (error: any) {
        throw new Error(error)
    }
}