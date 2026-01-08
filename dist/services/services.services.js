"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createService = createService;
exports.searchServiceByUrl = searchServiceByUrl;
exports.searchServiceById = searchServiceById;
exports.updateService = updateService;
exports.deleteService = deleteService;
const services_create_1 = require("../database/services/services.create");
const appError_1 = require("../utils/appError");
const services_read_1 = require("../database/services/services.read");
const utilNumbers_1 = require("../utils/utilNumbers");
const servicesHealth_create_1 = require("../database/servicesHealth/servicesHealth.create");
const services_delete_1 = require("../database/services/services.delete");
const services_update_1 = require("../database/services/services.update");
const servicesHealth_delete_1 = require("../database/servicesHealth/servicesHealth.delete");
async function createService(name, url, environment) {
    if (await searchServiceByUrl(url)) {
        throw new appError_1.AppError("Serviço ja cadastrado", utilNumbers_1.statusCodes.CONFLICT);
    }
    try {
        const newService = await (0, services_create_1.createServiceDb)(name, url, environment);
        const newServiceHealth = await (0, servicesHealth_create_1.createServiceHealthDb)(newService.id);
        return { newService, newServiceHealth };
    }
    catch (error) {
        throw error;
    }
}
async function searchServiceByUrl(serviceUrl) {
    try {
        const searchedService = await (0, services_read_1.searchServiceByUrlDb)(serviceUrl);
        return searchedService;
    }
    catch (error) {
        return {};
    }
}
async function searchServiceById(serviceId) {
    try {
        const searchedService = await (0, services_read_1.searchServiceByIdDb)(serviceId);
        if (!searchedService) {
            throw new appError_1.AppError("Servico nao encontrado", utilNumbers_1.statusCodes.NOT_FOUND);
        }
        return searchedService;
    }
    catch (error) {
        if (error instanceof appError_1.AppError) {
            throw error;
        }
        ;
        throw new Error(error);
    }
}
async function updateService(serviceId, data) {
    if (!data) {
        throw new appError_1.AppError("Nenhuma informacao fornecida para atualizar", utilNumbers_1.statusCodes.BAD_REQUEST);
    }
    if (!await searchServiceById(serviceId)) {
        throw new appError_1.AppError("Serviço nao encontrado", utilNumbers_1.statusCodes.NOT_FOUND);
    }
    const updatedService = await (0, services_update_1.updateServiceDb)(serviceId, data);
    return updatedService;
}
async function deleteService(serviceId) {
    try {
        const deletedService = await (0, services_delete_1.deleteServiceDb)(serviceId);
        const deletedServiceHealth = await (0, servicesHealth_delete_1.deleteServiceHealthDb)(serviceId);
        return { deletedService, deletedServiceHealth };
    }
    catch (error) {
        throw error;
    }
}
