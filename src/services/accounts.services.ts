import bcrypt from "bcrypt";

import { createUserDb } from "../database/accounts/accounts.create";
import { searchUserDb } from "../database/accounts/accounts.read";
import { AppError } from "../utils/appError";
import { signJWT } from "./jwt.services";

export async function createUser(user: string, password: string) {
    try {
        const hashPassword = bcrypt.hashSync(password, 10);
        const createdUser = await createUserDb(user, hashPassword);
        return createdUser;
    } catch (error: any) {
        throw error;
    }
}

export async function findUser(user: string, password: string) {
    try {
        const hashPassword = bcrypt // syncar com a senha que pega no searchedUser
        const searchedUser = await searchUserDb(user);
        return searchedUser;
    } catch (error: any) {
        throw error;
    }
}

export async function loginAccount(user: string, password: string) {
    try {
        const searchedUser = await findUser(user, password);
        if (!searchedUser) {
            throw new AppError("Usuario nao encontrado", 404);
        }
        const token = signJWT(searchedUser);


    } catch (error: any) {
        throw error;
    }
}

