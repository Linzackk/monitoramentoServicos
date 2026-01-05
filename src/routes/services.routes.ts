import { Router } from "express";
import { validarAdicionarService, validarFiltrarService, validarAtualizarService } from "../middleware/services.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { cadastrarService, procurarService, deletarService, atualizarService } from "../controllers/services.controller";
import { requireAtLeastOneField } from "../middleware/requireAtLeastOneField";

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

router.patch(
    "/:id",
    validarFiltrarService,
    validarAtualizarService,
    validarResultado,
    requireAtLeastOneField,
    atualizarService,
)

export default router