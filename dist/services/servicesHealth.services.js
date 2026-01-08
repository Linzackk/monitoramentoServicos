"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchServiceHealthById = searchServiceHealthById;
exports.checkAllServices = checkAllServices;
exports.updateServiceHealth = updateServiceHealth;
const axios_1 = __importDefault(require("axios"));
const servicesHealth_read_1 = require("../database/servicesHealth/servicesHealth.read");
const appError_1 = require("../utils/appError");
const utilNumbers_1 = require("../utils/utilNumbers");
const servicesHealth_update_1 = require("../database/servicesHealth/servicesHealth.update");
const incidents_services_1 = require("./incidents.services");
async function searchServiceHealthById(serviceHealthId) {
    try {
        const searchedServiceHealth = await (0, servicesHealth_read_1.searchServiceHealthByIdDb)(serviceHealthId);
        if (!searchedServiceHealth)
            throw new appError_1.AppError("Servico nao encontrado", utilNumbers_1.statusCodes.NOT_FOUND);
        return searchedServiceHealth;
    }
    catch (error) {
        throw error;
    }
}
async function checkAllServices(services) {
    if (services.length === 0)
        return;
    for (let index = 0; index < services.length; index++) {
        const service = services[index];
        console.log("Checking service:", service.name, service.url);
        await checkService(service);
    }
    return;
}
async function checkService(service) {
    const { responseTime, checkedAt } = await checkServiceResponseTime(service);
    await updateServiceHealth(service, responseTime, checkedAt);
    return;
}
async function checkServiceResponseTime(service) {
    try {
        const start = Date.now();
        await axios_1.default.get(service.url, {
            timeout: utilNumbers_1.ResponsTimeMs.OFFLINE
        });
        const duration = Date.now() - start;
        const response = {
            responseTime: duration,
            checkedAt: new Date(),
        };
        return response;
    }
    catch (error) {
        const response = {
            responseTime: utilNumbers_1.ResponsTimeMs.OFFLINE,
            checkedAt: new Date(),
        };
        return response;
    }
}
async function updateServiceHealth(service, responseTime, lastChecked) {
    let serviceStatusNow = "ONLINE";
    if (responseTime >= utilNumbers_1.ResponsTimeMs.OFFLINE)
        serviceStatusNow = "OFFLINE";
    else if (responseTime >= utilNumbers_1.ResponsTimeMs.INSTAVEL)
        serviceStatusNow = "INSTAVEL";
    const lastCheckedserviceHealth = await (0, servicesHealth_read_1.searchServiceHealthByIdDb)(service.id);
    const lastStatus = lastCheckedserviceHealth?.current_status;
    if (serviceStatusNow === lastStatus) {
        return;
    }
    const reason = "";
    const uptatedServiceHealth = await (0, servicesHealth_update_1.updateServiceHealthDb)(service.id, serviceStatusNow, lastChecked, responseTime);
    const incident = await (0, incidents_services_1.manageIncidents)(service.id, serviceStatusNow, lastChecked, lastChecked, reason);
    return;
}
