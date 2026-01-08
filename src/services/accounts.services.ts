import bcrypt from "bcrypt";
import { createUserDb } from "../database/accounts/accounts.create";
import { searchUserDb } from "../database/accounts/accounts.read";

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
        const hashPassword = bcrypt.hashSync(password, 10);
        const searchedUser = await searchUserDb(user, hashPassword);
        return searchedUser;
    } catch (error: any) {
        throw error;
    }
}

