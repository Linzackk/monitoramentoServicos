import { Router } from "express";
import { validarResultado } from "../middleware/resultValidator";
import { procurarIncidents } from "../controllers/incidents.controller";
import { validarFiltrarId } from "../middleware/filterId";
import { validarQuantidadeIncidents } from "../middleware/incidents.middleware";

const router = Router();

router.get(
    "/:id",
    validarFiltrarId,
    validarQuantidadeIncidents,
    validarResultado,
    procurarIncidents
)

export default router;