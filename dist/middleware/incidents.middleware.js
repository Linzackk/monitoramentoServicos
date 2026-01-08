"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarQuantidadeIncidents = void 0;
const express_validator_1 = require("express-validator");
exports.validarQuantidadeIncidents = [
    (0, express_validator_1.query)("quantity")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({ min: 1, max: 10 })
        .withMessage("Campo precisa ser int min 1, max 10")
];
