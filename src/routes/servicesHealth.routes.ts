import { Router } from "express";
import { validarFiltrarId } from "../middleware/filterId";
import { validarResultado } from "../middleware/resultValidator";
import { procurarServiceHealth } from "../controllers/servicesHealth.controller";

const router = Router();

/**
 * @openapi
 * /services/{id}/health:
 *   get:
 *     summary: Verifica o status de saúde de um serviço
 *     description: Retorna o status atual do serviço (ONLINE, INSTÁVEL ou OFFLINE), a última vez que foi checado e o tempo em milissegundos do último check.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do serviço
 *     responses:
 *       200:
 *         description: Status do serviço retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: ["ONLINE", "INSTAVEL", "OFFLINE"]
 *                   example: "ONLINE"
 *                 lastChecked:
 *                   type: string
 *                   format: date-time
 *                   example: "2026-01-08T19:30:00Z"
 *                 responseTimeMs:
 *                   type: number
 *                   example: 120
 *       404:
 *         description: Serviço não encontrado
 */
router.get(
    "/:id",
    validarFiltrarId,
    validarResultado,
    procurarServiceHealth
)

export default router;