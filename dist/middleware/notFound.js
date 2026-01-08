"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = notFound;
const appError_1 = require("../utils/appError");
const utilNumbers_1 = require("../utils/utilNumbers");
function notFound(req, res, next) {
    next(new appError_1.AppError("Rota não encontrada", utilNumbers_1.statusCodes.NOT_FOUND));
}
