import { body, param, } from "express-validator";
import { Environment } from "../prisma/prisma/enums";

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

export const validarFiltrarService = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({min: 1})
        .withMessage("Campo precisa ser int minimo 1")
]   