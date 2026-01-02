import { Router } from "express";
import { validarAdicionarService } from "../middleware/services.middleware";
import { validarResultado } from "../middleware/resultValidator";

const router = Router();

router.post(
    "/",
    validarAdicionarService,
    validarResultado,
    
)

export default router