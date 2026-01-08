"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultValidator_1 = require("../middleware/resultValidator");
const incidents_controller_1 = require("../controllers/incidents.controller");
const filterId_1 = require("../middleware/filterId");
const incidents_middleware_1 = require("../middleware/incidents.middleware");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /incidents/{id}:
 *   get:
 *     summary: Lista incidents de um serviço
 *     description: "Retorna os incidents de um serviço específico. É possível limitar a quantidade com o parâmetro 'quantity' de 1 a 10."
 *     tags:
 *       - Incidents
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: "ID do serviço"
 *       - in: query
 *         name: quantity
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 10
 *         description: "Quantidade de incidents a retornar (mín: 1, máx: 10)"
 *     responses:
 *       200:
 *         description: "Lista de incidents retornada com sucesso"
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
 *                   responseTimeMs:
 *                     type: number
 *                     example: 120
 *       400:
 *         description: "Parâmetros inválidos (ex.: quantity fora do intervalo)"
 *       404:
 *         description: "Serviço ou incidents não encontrados"
 */
router.get("/:id", filterId_1.validarFiltrarId, incidents_middleware_1.validarQuantidadeIncidents, resultValidator_1.validarResultado, incidents_controller_1.procurarIncidents);
exports.default = router;
