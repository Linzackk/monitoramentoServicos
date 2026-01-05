import { body } from "express-validator";
import { ENVIRONMENTS } from "../utils/constants";

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
        .isIn(ENVIRONMENTS)
        .withMessage("Campo precisa ser 'DEV', 'STATINGS' ou 'PROD'"),
]