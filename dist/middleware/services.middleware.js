"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAtualizarService = exports.validarAdicionarService = void 0;
const express_validator_1 = require("express-validator");
const client_1 = require("@prisma/client");
exports.validarAdicionarService = [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
    (0, express_validator_1.body)("url")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
    (0, express_validator_1.body)("environment")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string")
        .isIn(Object.values(client_1.Environment))
        .withMessage("Campo precisa ser 'DEV', 'STATINGS' ou 'PROD'"),
];
exports.validarAtualizarService = [
    (0, express_validator_1.body)("name")
        .optional()
        .notEmpty()
        .withMessage("Campo precisa ter um valor")
        .isString()
        .withMessage("Campo precisa ser string"),
    (0, express_validator_1.body)("url")
        .optional()
        .notEmpty()
        .withMessage("Campo precisa ter um valor")
        .isString()
        .withMessage("Campo precisa ser string"),
    (0, express_validator_1.body)("environment")
        .optional()
        .notEmpty()
        .withMessage("Campo precisa ter um valor")
        .isString()
        .withMessage("Campo precisa ser string")
        .isIn(Object.values(client_1.Environment))
        .withMessage("Campo precisa ser 'DEV', 'STATINGS' ou 'PROD'"),
];
