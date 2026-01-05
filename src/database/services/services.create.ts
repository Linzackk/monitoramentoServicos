import { Environment } from "../../prisma/prisma/enums";
import { prisma } from "../../utils/prisma";

export async function createServiceDb (
    name: string,
    url: string,
    environment: Environment,
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
    } catch (error: any) {
        throw new Error(error)
    }
}