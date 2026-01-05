import { Router } from "express";
import { validarAdicionarService, validarFiltrarService, validarAtualizarService } from "../middleware/services.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { cadastrarService, procurarService, deletarService } from "../controllers/services.controller";

const router = Router();

router.post(
    "/",
    validarAdicionarService,
    validarResultado,
    cadastrarService
)

router.get(
    "/:id",
    validarFiltrarService,
    validarResultado,
    procurarService
)

router.delete(
    "/:id",
    validarFiltrarService,
    validarResultado,
    deletarService
)

router.put(
    ":/id",
    validarFiltrarService,
    validarAtualizarService,
    validarResultado,
    atualizarService,
)

export default router