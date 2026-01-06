import { Request, Response } from "express";

import { statusCodes } from "../utils/utilNumbers";
import { searchServiceHealthById } from "../services/servicesHealth.services";

export async function procurarServiceHealth(
    req: Request,
    res: Response,
) {
    const id = Number(req.params.id);

    const serviceHealth = await searchServiceHealthById(id);
    return res.status(statusCodes.OK).json({
        message: "Service Health encontrado",
        data: {serviceHealth},
    });
}