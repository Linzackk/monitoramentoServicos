import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const isAppError = err instanceof AppError;
    const statusCode = isAppError ? err.statusCode: 500;
    const message = isAppError
        ? err.message
        : "Erro interno do servidor";

    console.error({
        name: err.name,
        message: err.message,
        stack: err.stack,
    });

    return res.status(statusCode).json({
        error: message,
    });
}