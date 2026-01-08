import { header } from "express-validator";

export const validarAutorizacaoToken = [
    header("authorization")
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
]