"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchUserDb = searchUserDb;
const prisma_1 = require("../../utils/prisma");
async function searchUserDb(user) {
    try {
        const searchedUser = await prisma_1.prisma.account.findFirst({
            where: {
                user: user,
            }
        });
        return searchedUser;
    }
    catch (error) {
        throw error;
    }
}
