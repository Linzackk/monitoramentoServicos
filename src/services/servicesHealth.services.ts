import axios from "axios";
import { searchServiceHealthByIdDb } from "../database/servicesHealth/servicesHealth.read";
import { CurrentStatus, Service } from "../prisma/prisma/client";
import { AppError } from "../utils/appError";
import { ResponsTimeMs, statusCodes } from "../utils/utilNumbers";
import { CheckService } from "../utils/interfaces";
import { updateServiceHealthDb } from "../database/servicesHealth/servicesHealth.update";

export async function searchServiceHealthById(serviceHealthId: number) {
    try {
        const searchedServiceHealth = await searchServiceHealthByIdDb(serviceHealthId);
        if (!searchedServiceHealth) throw new AppError("Servico nao encontrado", statusCodes.NOT_FOUND);

        return searchedServiceHealth;
    } catch (error: any) {
        throw error;
    }
}

export async function checkAllServices(services: Service[]) {
    if (services.length === 0) return;

    for (let index = 0; index < services.length; index++) {
        const service = services[index];
        console.log("Checking service:", service.name, service.url)
        await checkService(service);
    }
    return;
}

async function checkService(service: Service) {
    const {responseTime, checkedAt} = await checkServiceResponseTime(service);
    await updateServiceHealth(service, responseTime, checkedAt);
    return;
}

async function checkServiceResponseTime(service: Service) {
    try {
        const start = Date.now();

        await axios.get(service.url, {
            timeout: ResponsTimeMs.OFFLINE
        });

        const duration = Date.now() - start;
        const response: CheckService = {
            responseTime: duration,
            checkedAt: new Date(),
            }
        return response;    
    } catch (error) {
        const response: CheckService = {
            responseTime: ResponsTimeMs.OFFLINE,
            checkedAt: new Date(),
        }
        return response;
    } 
}

export async function updateServiceHealth(
    service: Service, 
    responseTime: number, 
    lastChecked: Date
) {
    let serviceStatus: CurrentStatus = "ONLINE";
    if (responseTime >= ResponsTimeMs.OFFLINE) serviceStatus = "OFFLINE";
    else if (responseTime >= ResponsTimeMs.INSTAVEL) serviceStatus = "INSTAVEL";

    const serviceHealth = await searchServiceHealthByIdDb(service.id)
    const currentStatus = serviceHealth?.current_status;

    if (serviceStatus === currentStatus) {
        return;
    }
    await updateServiceHealthDb(service.id, serviceStatus, lastChecked, responseTime);
    // Criar um incidente se mudar para Offline ou Instavel
    return;
}