import { Router } from "express";
import { validarAccount } from "../middleware/account.middleware";
import { validarResultado } from "../middleware/resultValidator";
import { criarAccount, logarAccount } from "../controllers/accounts.controller";

const router = Router();

/**
 * @openapi
 * /accounts:
 *   get:
 *     summary: Faz login de um usuário
 *     description: Valida o usuário e senha fornecidos e retorna informações da conta ou token de autenticação.
 *     tags:
 *       - Accounts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user
 *               - password
 *             properties:
 *               user:
 *                 type: string
 *                 example: "isaac123"
 *               password:
 *                 type: string
 *                 example: "senhaSegura123"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Usuário ou senha incorretos
 */
router.get(
    "/",
    validarAccount,
    validarResultado,
    logarAccount
)


/**
 * @openapi
 * /accounts:
 *   post:
 *     summary: Cria uma nova conta de usuário
 *     description: Registra um novo usuário no sistema com username e senha.
 *     tags:
 *       - Accounts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user
 *               - password
 *             properties:
 *               user:
 *                 type: string
 *                 example: "isaac123"
 *               password:
 *                 type: string
 *                 example: "senhaSegura123"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: string
 *                   example: "admin"
 *       400:
 *         description: Dados inválidos
 */
router.post(
    "/", // criando novo usuario
    validarAccount,
    validarResultado,
    criarAccount
)

export default router;
