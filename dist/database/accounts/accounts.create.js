"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserDb = createUserDb;
const prisma_1 = require("../../utils/prisma");
async function createUserDb(user, password) {
    try {
        const createdUser = await prisma_1.prisma.account.create({
            data: {
                user: user,
                password: password
            }
        });
        return createdUser;
    }
    catch (error) {
        throw error;
    }
}
