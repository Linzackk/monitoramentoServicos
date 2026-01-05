import { createServiceDb } from "../database/services/services.create";
import { AppError } from "../utils/appError";
import { searchServiceByIdDb, searchServiceByUrlDb } from "../database/services/services.read";
import { statusCodes } from "../utils/statusCode";
import { Environment } from "../prisma/prisma/enums";
import { createServiceHealthDb } from "../database/servicesHealth/servicesHealth.create";
import { deleteServiceDb } from "../database/services/services.delete";
import { UpdateService } from "../utils/intefaces";
import { updateServiceDb } from "../database/services/services.update";
import { deleteServiceHealthDb } from "../database/servicesHealth/servicesHealth.delete";

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
        return {newService, newServiceHealth}
    } catch (error: any) {
        throw error
    }
}

export async function searchServiceByUrl(serviceUrl: string) {
    try {
        const searchedService = await searchServiceByUrlDb(serviceUrl);
        return searchedService;
    } catch (error: any) {
        return {};
    }
}

export async function searchServiceById(serviceId: number) {
    try {
        const searchedService = await searchServiceByIdDb(serviceId);
        if (!searchedService) {
            throw new AppError("Servico nao encontrado", statusCodes.NOT_FOUND)
        }
        return searchedService;
    } catch (error: any) {
        if (error instanceof AppError) {
            throw error;
        };
        throw new Error(error)
    }
}

export async function updateService(serviceId: number, data: UpdateService) {
    if (!data) {
        throw new AppError("Nenhuma informacao fornecida para atualizar", statusCodes.BAD_REQUEST);
    }
    if (!await searchServiceById(serviceId)) {
        throw new AppError("Serviço nao encontrado", statusCodes.NOT_FOUND);
    }

    const updatedService = await updateServiceDb(serviceId, data);
    return updatedService;
}

export async function deleteService(serviceId: number) {
    try {
        const deletedService = await deleteServiceDb(serviceId);
        const deletedServiceHealth = await deleteServiceHealthDb(serviceId);
        return {deletedService, deletedServiceHealth};
    } catch (error: any) {
        throw error;
    }
}