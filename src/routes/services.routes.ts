import { Router } from "express";
import { validarAdicionarService } from "../middleware/services.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { cadastrarServico } from "../controllers/services.controller";

const router = Router();

router.post(
    "/",
    validarAdicionarService,
    validarResultado,
    cadastrarServico
)

export default router