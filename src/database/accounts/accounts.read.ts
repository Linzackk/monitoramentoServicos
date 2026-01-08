import { prisma } from "../../utils/prisma";

export async function searchUserDb(user: string, password: string) {
    try {
        const searchedUser = await prisma.account.findFirst({
            where: {
                password: password,
                user: user,
            }
        });
        return searchedUser;
    } catch (error: any) {
        throw error;
    }
}