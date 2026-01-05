import { searchServiceHealthByIdDb } from "../database/servicesHealth/servicesHealth.read";
import { AppError } from "../utils/appError";
import { statusCodes } from "../utils/statusCode";

export async function searchServiceHealthById(serviceHealthId: number) {
    try {
        const searchedServiceHealth = await searchServiceHealthByIdDb(serviceHealthId);
        if (!searchedServiceHealth) throw new AppError("Servico nao encontrado", statusCodes.NOT_FOUND);

        return searchedServiceHealth;
    } catch (error: any) {
        throw error;
    }
}