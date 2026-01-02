import { createServiceDb } from "../database/services/services.create";
import { AppError } from "../utils/appError";
import { Prisma } from "../prisma/prisma/client";

export async function createService(
    name: string,
    url: string, 
    environment: "PROD" | "DEV" | "STATINGS"
) {
    try {
        const newService = await createServiceDb(name, url, environment);
        return newService
    } catch (error: any) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            throw new AppError("Serviço ja existente", 409);
        }
        throw new AppError("Erro interno do Servidor", 500);
    }
}