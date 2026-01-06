import { query } from "express-validator";

export const validarQuantidadeIncidents = [
    query("quantity")
        .notEmpty()
        .withMessage("Campo obrigatorio")
        .isInt({ min: 1, max: 10})
        .withMessage("Campo precisa ser int min 1, max 10")
]