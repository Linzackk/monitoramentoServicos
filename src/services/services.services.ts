import { createServiceDb } from "../database/services/services.create";
import { AppError } from "../utils/appError";
import { searchServiceByUrlDb } from "../database/services/services.read";
import { statusCodes } from "../utils/statusCode";

export async function createService(
    name: string,
    url: string, 
    environment: "PROD" | "DEV" | "STATINGS"
) {
    if (await searchServiceByUrl(url)) {
        throw new AppError("Serviço ja cadastrado", statusCodes.CONFLICT);
    }
    try {
        const newService = await createServiceDb(name, url, environment);
        // criar na tabela ServiceHealth com padrão funcionando
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