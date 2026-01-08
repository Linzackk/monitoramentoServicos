"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAccount = void 0;
const express_validator_1 = require("express-validator");
exports.validarAccount = [
    (0, express_validator_1.body)("user")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
];
