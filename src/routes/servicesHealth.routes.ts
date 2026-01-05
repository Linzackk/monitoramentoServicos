import { Router } from "express";
import { validarFiltrarId } from "../middleware/filterId";
import { validarResultado } from "../middleware/resultValidator";
import { procurarServiceHealth } from "../controllers/servicesHealth.controller";

const router = Router();

router.get(
    "/:id",
    validarFiltrarId,
    validarResultado,
    procurarServiceHealth
)

export default router;