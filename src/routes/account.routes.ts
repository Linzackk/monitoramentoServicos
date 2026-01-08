import { Router } from "express";
import { validarAccount } from "../middleware/account.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { criarAccount, logarAccount, testeJWT } from "../controllers/accounts.controller";
import { validarAutorizacaoToken } from "../middleware/auth.middleware";
import { verifyJWT } from "../middleware/jwtVerifier";

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

export default router;
