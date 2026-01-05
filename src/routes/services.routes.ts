import { Router } from "express";
import { validarAdicionarService, validarProcurarService } from "../middleware/services.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { cadastrarService, procurarService } from "../controllers/services.controller";

const router = Router();

router.post(
    "/",
    validarAdicionarService,
    validarResultado,
    cadastrarService
)

router.get(
    "/",
    validarProcurarService,
    validarResultado,
    procurarService
)

export default router