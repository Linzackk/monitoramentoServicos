import { Router } from "express";
import { validarCriarAccount } from "../middleware/account.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { criarAccount } from "../controllers/accounts.controller";

const router = Router();

// router.get(
//     "/"
//     // Login
// )

router.post(
    "/", // criando novo usuario
    validarCriarAccount,
    validarResultado,
    criarAccount
)

export default router;
