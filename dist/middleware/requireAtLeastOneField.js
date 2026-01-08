"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAtLeastOneField = requireAtLeastOneField;
const appError_1 = require("../utils/appError");
const utilNumbers_1 = require("../utils/utilNumbers");
function requireAtLeastOneField(req, res, next) {
    const body = req.body;
    if (!body || Object.keys(body).length === 0) {
        throw new appError_1.AppError("Nenhuma informacao foi fornecida", utilNumbers_1.statusCodes.BAD_REQUEST);
    }
    const possuiCampoInvalido = Object.values(body).some(value => value === undefined || value === null);
    if (possuiCampoInvalido) {
        throw new appError_1.AppError("Nenhuma informacao valida fornecida", utilNumbers_1.statusCodes.BAD_REQUEST);
    }
    next();
}
