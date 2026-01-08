"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarFiltrarId = void 0;
const express_validator_1 = require("express-validator");
exports.validarFiltrarId = [
    (0, express_validator_1.param)("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({ min: 1 })
        .withMessage("Campo precisa ser int minimo 1")
];
