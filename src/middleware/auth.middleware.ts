import { header } from "express-validator";

export const validarAutorizacaoToken = [
    header("authorization")
        .isEmpty()
        .withMessage("Campo obrigatorio")
        .isString()
        .withMessage("Campo precisa ser string")
        .isJWT()
        .withMessage("Precisa ser um Token JWT")
]