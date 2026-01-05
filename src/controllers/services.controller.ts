import { Request, Response } from "express";
import { createService, deleteService, searchServiceById, updateService } from "../services/services.services";
import { statusCodes } from "../utils/statusCode";
import { UpdateService } from "../utils/intefaces";

export async function cadastrarService(
    req: Request,
    res: Response,
) {
    const {name, url, environment} = req.body;

    const newService = await createService(name, url, environment);
    return res.status(statusCodes.CREATED).json({
        message: "Novo serviço criado com sucesso",
        data: {service: newService},
    });
}

export async function procurarService(
    req: Request,
    res: Response,
) {
    const id = Number(req.params.id);

    const searchedService = await searchServiceById(id);
    return res.status(statusCodes.OK).json({
        message: "Servico encontrado com sucesso",
        data: {service: searchedService}
    });
}

export async function deletarService(
    req: Request, 
    res: Response
) {
    const id = Number(req.params.id);

    const deletedService = await deleteService(id);
    return res.status(statusCodes.OK).json({
        message: "Servico deletado com sucesso",
        data: {service: deletedService}
    });
}

export async function atualizarService(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id);
    const {name, url, environment} = req.body;
    const data: UpdateService = {name, url, environment}
    if (!data) {
        return res.status(statusCodes.BAD_REQUEST).json({
            message: "nenhuma informação fornecida"
        })
    }

    const response = await updateService(id, data)
    return res.status(statusCodes.OK).json({
        message: "TESTE",
        response
    })
}