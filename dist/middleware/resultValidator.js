"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarResultado = validarResultado;
const express_validator_1 = require("express-validator");
const utilNumbers_1 = require("../utils/utilNumbers");
function validarResultado(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const errorsResponse = errors.array().map(error => {
            const fieldError = error;
            return {
                field: fieldError.path,
                message: fieldError.msg,
            };
        });
        return res.status(utilNumbers_1.statusCodes.BAD_REQUEST).json({
            errors: errorsResponse,
        });
    }
    next();
}
