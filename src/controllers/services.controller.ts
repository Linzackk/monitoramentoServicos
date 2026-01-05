import { Request, Response } from "express";
import { createService, searchServiceById } from "../services/services.services";
import { statusCodes } from "../utils/statusCode";

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
        message: "Serviço encontrado com sucesso",
        data: {service: searchedService}
    });
}