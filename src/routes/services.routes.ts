import { Router } from "express";
import { validarAdicionarService, validarAtualizarService } from "../middleware/services.middleware";
import { validarFiltrarId } from "../middleware/filterId";
import { validarResultado } from "../middleware/resultValidator";
import { cadastrarService, procurarService, deletarService, atualizarService } from "../controllers/services.controller";
import { requireAtLeastOneField } from "../middleware/requireAtLeastOneField";
import { validarAutorizacaoToken } from "../middleware/auth.middleware";
import { verifyJWT } from "../middleware/jwtVerifier";

const router = Router();

router.post(
    "/",
    validarAdicionarService,
    validarAutorizacaoToken,
    validarResultado,
    verifyJWT,
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
    validarAutorizacaoToken,
    validarResultado,
    verifyJWT,
    deletarService
)

router.patch(
    "/:id",
    validarFiltrarId,
    validarAtualizarService,
    validarAutorizacaoToken,
    validarResultado,
    requireAtLeastOneField,
    verifyJWT,
    atualizarService,
)

export default router