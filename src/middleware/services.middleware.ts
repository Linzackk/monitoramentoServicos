import { body } from "express-validator";

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
        .isIn(["DEV", "STATINGS", "PROD"])
        .withMessage("Campo precisa ser 'DEV', 'STATINGS' ou 'PROD'"),
]