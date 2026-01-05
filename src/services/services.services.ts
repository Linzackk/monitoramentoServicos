import { createServiceDb } from "../database/services/services.create";
import { AppError } from "../utils/appError";
import { searchServiceByIdDb, searchServiceByUrlDb } from "../database/services/services.read";
import { statusCodes } from "../utils/statusCode";
import { Environment } from "../prisma/prisma/enums";
import { createServiceHealthDb } from "../database/servicesHealth/servicesHealth.create";

export async function createService(
    name: string,
    url: string, 
    environment: Environment
) {
    if (await searchServiceByUrl(url)) {
        throw new AppError("Serviço ja cadastrado", statusCodes.CONFLICT);
    }
    try {
        const newService = await createServiceDb(name, url, environment);
        const newServiceHealth = await createServiceHealthDb(newService.id)
        return newService
    } catch (error: any) {
        throw new AppError("Erro interno do Servidor", statusCodes.SERVER_ERROR);
    }
}

export async function searchServiceByUrl(url: string) {
    try {
        const searchedService = await searchServiceByUrlDb(url);
        return searchedService;
    } catch (error: any) {
        return {};
    }
}

export async function searchServiceById(id: number) {
    try {
        const searchedService = await searchServiceByIdDb(id);
        return searchedService;
    } catch (error: any) {
        throw new AppError("Serviço inexistente", statusCodes.NOT_FOUND)
    }
}