"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const appError_1 = require("../utils/appError");
const utilNumbers_1 = require("../utils/utilNumbers");
function errorHandler(err, req, res, next) {
    const isAppError = err instanceof appError_1.AppError;
    const statusCode = isAppError ? err.statusCode : utilNumbers_1.statusCodes.SERVER_ERROR;
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
