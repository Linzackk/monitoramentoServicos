import { Router } from "express";
import { validarAdicionarService, validarAtualizarService } from "../middleware/services.middleware";
import { validarFiltrarId } from "../middleware/filterId";
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
    validarFiltrarId,
    validarResultado,
    procurarService
)

router.delete(
    "/:id",
    validarFiltrarId,
    validarResultado,
    deletarService
)

router.patch(
    "/:id",
    validarFiltrarId,
    validarAtualizarService,
    validarResultado,
    requireAtLeastOneField,
    atualizarService,
)

export default router