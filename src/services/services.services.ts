import { createServiceDb } from "../database/services/services.create";
import { AppError } from "../utils/appError";
import { Prisma } from "../prisma/prisma/client";
import { searchServiceByUrlDb } from "../database/services/services.read";

export async function createService(
    name: string,
    url: string, 
    environment: "PROD" | "DEV" | "STATINGS"
) {
    if (await searchServiceByUrl(url)) {
        throw new AppError("Serviço ja cadastrado", 409);
    }
    try {
        const newService = await createServiceDb(name, url, environment);
        return newService
    } catch (error: any) {
        throw new AppError("Erro interno do Servidor", 500);
    }
}

export async function searchServiceByUrl(url: string) {
    try {
        const searchedService = await searchServiceByUrlDb(url);
        
    } catch (error: any) {
        return false
    }
}