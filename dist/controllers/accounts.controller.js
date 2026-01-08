"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarAccount = criarAccount;
exports.logarAccount = logarAccount;
exports.testeJWT = testeJWT;
const accounts_services_1 = require("../services/accounts.services");
const utilNumbers_1 = require("../utils/utilNumbers");
async function criarAccount(req, res) {
    const { user, password } = req.body;
    const createdUser = await (0, accounts_services_1.createUser)(user, password);
    res.status(utilNumbers_1.statusCodes.OK).json({
        message: "Nova conta criada",
        data: { user: user }
    });
}
async function logarAccount(req, res) {
    const { user, password } = req.body;
    const tokenJWT = await (0, accounts_services_1.loginAccount)(user, password);
    res.status(utilNumbers_1.statusCodes.OK).json({
        token: tokenJWT
    });
}
async function testeJWT(req, res) {
    const { authorization } = req.headers;
    res.status(201).json({
        authorization
    });
}
