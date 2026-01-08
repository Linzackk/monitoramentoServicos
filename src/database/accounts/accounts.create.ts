import { prisma } from "../../utils/prisma";

export async function createUserDb(user: string, password: string) {
    try {
        const createdUser = await prisma.account.create({
            data: {
                user: user,
                password: password   
            }
        });
        return createdUser;
    } catch (error: any) {
        throw error;
    }
}