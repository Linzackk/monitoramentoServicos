import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";
import { statusCodes } from "../utils/statusCode";

export function requireAtLeastOneField(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
        throw new AppError("Nenhuma informacao foi fornecida", statusCodes.BAD_REQUEST);
    }

    const possuiCampoInvalido = Object.values(body).some(
        value => value === undefined || value === null
    )

    if (possuiCampoInvalido) {
        throw new AppError("Nenhuma informacao valida fornecida", statusCodes.BAD_REQUEST);
    }

    next();
}