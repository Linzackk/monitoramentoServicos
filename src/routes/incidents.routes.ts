import { Router } from "express";
import { validarResultado } from "../middleware/resultValidator";
import { procurarIncidents } from "../controllers/incidents.controller";
import { validarFiltrarId } from "../middleware/filterId";
import { validarQuantidadeIncidents } from "../middleware/incidents.middleware";

const router = Router();

/**
 * @openapi
 * /incidents/{id}:
 *   get:
 *     summary: Lista incidents de um serviço
 *     description: Retorna os incidents de um serviço específico. É possível limitar a quantidade com o parâmetro `quantity` (1 a 10).
 *     tags:
 *       - Incidents
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do serviço
 *       - in: query
 *         name: quantity
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 10
 *         description: Quantidade de incidents a retornar (mín: 1, máx: 10)
 *     responses:
 *       200:
 *         description: Lista de incidents retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "456"
 *                   title:
 *                     type: string
 *                     example: "Serviço fora do ar"
 *                   status:
 *                     type: string
 *                     example: "open"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2026-01-08T19:00:00Z"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2026-01-08T19:00:00Z"
 *       400:
 *         description: Parâmetros inválidos (ex.: quantity fora do intervalo)
 *       404:
 *         description: Serviço ou incidents não encontrados
 */

router.get(
    "/:id",
    validarFiltrarId,
    validarQuantidadeIncidents,
    validarResultado,
    procurarIncidents
)

export default router;