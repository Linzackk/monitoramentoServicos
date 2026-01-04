import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";
import { statusCodes } from "../utils/statusCode";

export function notFound(
    req: Request,
    res: Response,
    next: NextFunction
) {
    next(new AppError("Rota não encontrada", statusCodes.NOT_FOUND));
}