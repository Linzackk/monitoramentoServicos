import bcrypt from "bcrypt";

import { createUserDb } from "../database/accounts/accounts.create";
import { searchUserDb } from "../database/accounts/accounts.read";
import { AppError } from "../utils/appError";
import { signJWT } from "./jwt.services";
import { statusCodes } from "../utils/utilNumbers";

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
        const searchedUser = await searchUserDb(user);
        if (!searchedUser) throw new AppError("Usuario nao encontrado", statusCodes.NOT_FOUND) 
        if (!bcrypt.compareSync(password, searchedUser.password)) {
            throw new AppError("Usuario nao encontrado", statusCodes.NOT_FOUND)     
        }
        
        return searchedUser;
    } catch (error: any) {
        throw error;
    }
}

export async function loginAccount(user: string, password: string) {
    try {
        const searchedUser = await findUser(user, password);
        const token = signJWT(searchedUser);
        return token;

    } catch (error: any) {
        throw new AppError(error.message, statusCodes.SERVER_ERROR);
    }
}

