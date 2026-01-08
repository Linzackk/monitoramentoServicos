"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAutorizacaoToken = void 0;
const express_validator_1 = require("express-validator");
exports.validarAutorizacaoToken = [
    (0, express_validator_1.header)("authorization")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string")
        .custom(value => {
        if (!value.startsWith("Bearer ")) {
            throw new Error("Token deve estar no formato Bearer <token>");
        }
        const token = value.split(" ")[1];
        if (!token) {
            throw new Error("Token Bearer está vazio");
        }
        return true;
    })
];
