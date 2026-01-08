import { prisma } from "../../utils/prisma";

export async function searchUserDb(user: string) {
    try {
        const searchedUser = await prisma.account.findFirst({
            where: {
                user: user,
            }
        });
        return searchedUser;
    } catch (error: any) {
        throw error;
    }
}