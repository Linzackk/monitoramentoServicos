import { body, param, } from "express-validator";
import { Environment } from "@prisma/client";

export const validarAdicionarService = [
    body("name")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
    
    body("url")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),

    body("environment")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string")
        .isIn(Object.values(Environment))
        .withMessage("Campo precisa ser 'DEV', 'STATINGS' ou 'PROD'"),
]

export const validarAtualizarService = [
    body("name")
        .optional()
        .notEmpty()
        .withMessage("Campo precisa ter um valor")
        .isString()
        .withMessage("Campo precisa ser string"),
    
    body("url")
        .optional()
        .notEmpty()
        .withMessage("Campo precisa ter um valor")
        .isString()
        .withMessage("Campo precisa ser string"),

    body("environment")
        .optional()
        .notEmpty()
        .withMessage("Campo precisa ter um valor")
        .isString()
        .withMessage("Campo precisa ser string")
        .isIn(Object.values(Environment))
        .withMessage("Campo precisa ser 'DEV', 'STATINGS' ou 'PROD'"),
]