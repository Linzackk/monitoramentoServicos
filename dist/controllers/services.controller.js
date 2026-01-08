"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarService = cadastrarService;
exports.procurarService = procurarService;
exports.deletarService = deletarService;
exports.atualizarService = atualizarService;
const services_services_1 = require("../services/services.services");
const utilNumbers_1 = require("../utils/utilNumbers");
async function cadastrarService(req, res) {
    const { name, url, environment } = req.body;
    const response = await (0, services_services_1.createService)(name, url, environment);
    return res.status(utilNumbers_1.statusCodes.CREATED).json({
        message: "Novo serviço criado com sucesso",
        data: {
            service: response.newService,
            serviceHealth: response.newServiceHealth
        },
    });
}
async function procurarService(req, res) {
    const id = Number(req.params.id);
    const response = await (0, services_services_1.searchServiceById)(id);
    return res.status(utilNumbers_1.statusCodes.OK).json({
        message: "Servico encontrado com sucesso",
        data: { service: response }
    });
}
async function deletarService(req, res) {
    const id = Number(req.params.id);
    const response = await (0, services_services_1.deleteService)(id);
    return res.status(utilNumbers_1.statusCodes.OK).json({
        message: "Servico deletado com sucesso",
        data: {
            service: response.deletedService, serviceHealth: response.deletedServiceHealth
        }
    });
}
async function atualizarService(req, res) {
    const id = Number(req.params.id);
    const { name, url, environment } = req.body;
    const data = { name, url, environment };
    const updatedService = await (0, services_services_1.updateService)(id, data);
    return res.status(utilNumbers_1.statusCodes.OK).json({
        message: "Servico atualizado com sucesso",
        service: updatedService
    });
}
