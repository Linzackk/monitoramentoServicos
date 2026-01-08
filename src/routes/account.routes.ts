import { Router } from "express";
import { validarAccount } from "../middleware/account.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { criarAccount, logarAccount } from "../controllers/accounts.controller";
import { validarAutorizacaoToken } from "../middleware/auth.middleware";

const router = Router();

router.get(
    "/",
    validarAccount,
    validarResultado,
    logarAccount
)

router.post(
    "/", // criando novo usuario
    validarAccount,
    validarResultado,
    criarAccount
)

router.get(
    "/teste",
    validarAutorizacaoToken,
    validarResultado,
    
)

export default router;
