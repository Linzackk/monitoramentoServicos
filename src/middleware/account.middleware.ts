import { body } from "express-validator";

export const validarCriarAccount = [
    body("user")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),

    body("password")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string"),
]