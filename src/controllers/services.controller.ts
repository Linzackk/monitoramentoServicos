import { Request, Response } from "express";
import { createService } from "../services/services.services";
import { statusCodes } from "../utils/statusCode";

export async function cadastrarServico(
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