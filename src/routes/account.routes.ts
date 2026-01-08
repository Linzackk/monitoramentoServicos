import { Router } from "express";
import { validarAccount } from "../middleware/account.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { criarAccount, logarAccount } from "../controllers/accounts.controller";

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
