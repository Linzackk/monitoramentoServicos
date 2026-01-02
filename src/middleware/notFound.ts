import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export function notFound(
    req: Request,
    res: Response,
    next: NextFunction
) {
    next(new AppError("Rota não encontrada", 404));
}