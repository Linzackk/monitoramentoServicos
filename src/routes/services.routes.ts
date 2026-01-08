import { Router } from "express";
import { validarAdicionarService, validarAtualizarService } from "../middleware/services.middleware";
import { validarFiltrarId } from "../middleware/filterId";
import { validarResultado } from "../middleware/resultValidator";
import { cadastrarService, procurarService, deletarService, atualizarService } from "../controllers/services.controller";
import { requireAtLeastOneField } from "../middleware/requireAtLeastOneField";
import { validarAutorizacaoToken } from "../middleware/auth.middleware";
import { verifyJWT } from "../middleware/jwtVerifier";

const router = Router();
/**
 * @openapi
 * /services:
 *   post:
 *     summary: Cadastra um novo serviço
 *     description: Cria um serviço com nome, URL e ambiente. Necessita token válido.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - url
 *               - environment
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Meu Serviço"
 *               url:
 *                 type: string
 *                 example: "https://meuservico.com"
 *               environment:
 *                 type: string
 *                 enum: ["DEV", "STAGINGS", "PROD"]
 *                 example: "DEV"
 *     responses:
 *       201:
 *         description: Serviço cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post(
    "/",
    validarAdicionarService,
    validarAutorizacaoToken,
    validarResultado,
    verifyJWT,
    cadastrarService
)

/**
 * @openapi
 * /services/{id}:
 *   get:
 *     summary: Busca um serviço pelo ID
 *     description: Retorna os dados de um serviço específico.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do serviço
 *     responses:
 *       200:
 *         description: Serviço encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 name:
 *                   type: string
 *                   example: "Meu Serviço"
 *                 url:
 *                   type: string
 *                   example: "https://meuservico.com"
 *                 environment:
 *                   type: string
 *                   example: "DEV"
 *       404:
 *         description: Serviço não encontrado
 */
router.get(
    "/:id",
    validarFiltrarId,
    validarResultado,
    procurarService
)

/**
 * @openapi
 * /services/{id}:
 *   delete:
 *     summary: Deleta um serviço pelo ID
 *     description: Remove um serviço do sistema. Necessita token válido.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do serviço a ser deletado
 *     responses:
 *       200:
 *         description: Serviço deletado com sucesso
 *       401:
 *         description: Token inválido ou ausente
 *       404:
 *         description: Serviço não encontrado
 */
router.delete(
    "/:id",
    validarFiltrarId,
    validarAutorizacaoToken,
    validarResultado,
    verifyJWT,
    deletarService
)

/**
 * @openapi
 * /services/{id}:
 *   patch:
 *     summary: Atualiza dados de um serviço
 *     description: Permite atualizar nome, URL ou ambiente de um serviço. Necessita token válido. Pelo menos um campo deve estar presente.
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do serviço a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Novo Nome"
 *               url:
 *                 type: string
 *                 example: "https://novourl.com"
 *               environment:
 *                 type: string
 *                 enum: ["DEV", "STAGINGS", "PROD"]
 *                 example: "PROD"
 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso
 *       400:
 *         description: Nenhum campo para atualizar ou dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 *       404:
 *         description: Serviço não encontrado
 */
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