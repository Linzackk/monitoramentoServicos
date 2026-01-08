import { Request, Response } from "express";
import { createUser, findUser, loginAccount } from "../services/accounts.services";
import { statusCodes } from "../utils/utilNumbers";

export async function criarAccount(
    req: Request,
    res: Response
) {
    const {user, password} = req.body;

    const createdUser = await createUser(user, password);
    res.status(statusCodes.OK).json({
        message: "Nova conta criada",
        data: {user: user}
    });
}

export async function logarAccount(
    req: Request,
    res: Response
) {
    const {user, password} = req.body;

    const tokenJWT = await loginAccount(user, password);
    res.status(statusCodes.OK).json({
        token: tokenJWT
    })
}

export async function testeJWT(
    req: Request,
    res: Response
) {
    const {authorization} = req.headers
    res.status(201).json({
        authorization
    })
}