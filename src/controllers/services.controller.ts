import { Request, Response } from "express";
import { createService, deleteService, searchServiceById, updateService } from "../services/services.services";
import { statusCodes } from "../utils/utilNumbers";
import { UpdateService } from "../utils/interfaces";

export async function cadastrarService(
    req: Request,
    res: Response,
) {
    const {name, url, environment} = req.body;

    const response = await createService(name, url, environment);
    return res.status(statusCodes.CREATED).json({
        message: "Novo serviço criado com sucesso",
        data: {
            service: response.newService,
            serviceHealth: response.newServiceHealth
        },
    });
}

export async function procurarService(
    req: Request,
    res: Response,
) {
    const id = Number(req.params.id);

    const response = await searchServiceById(id);
    return res.status(statusCodes.OK).json({
        message: "Servico encontrado com sucesso",
        data: {service: response}
    });
}

export async function deletarService(
    req: Request, 
    res: Response
) {
    const id = Number(req.params.id);

    const response = await deleteService(id);
    return res.status(statusCodes.OK).json({
        message: "Servico deletado com sucesso",
        data: {
            service: response.deletedService, serviceHealth: 
            response.deletedServiceHealth
        }
    });
}

export async function atualizarService(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id);
    const {name, url, environment} = req.body;
    const data: UpdateService = {name, url, environment}

    const updatedService = await updateService(id, data)
    return res.status(statusCodes.OK).json({
        message: "Servico atualizado com sucesso",
        service: updatedService
    })
}