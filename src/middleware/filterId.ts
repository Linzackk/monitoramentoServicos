import { param } from "express-validator";

export const validarFiltrarId = [
    param("id")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({min: 1})
        .withMessage("Campo precisa ser int minimo 1")
]