"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../utils/prisma");
const password = "admin123";
const user = "admin";
async function main() {
    const exists = await prisma_1.prisma.account.findFirst({
        where: { user: user }
    });
    if (!exists) {
        const cryptedPassword = await bcrypt_1.default.hash(password, 10);
        const createdUser = await prisma_1.prisma.account.create({
            data: {
                user: user,
                password: cryptedPassword
            }
        });
    }
}
main()
    .catch(console.error)
    .finally(async () => {
    await prisma_1.prisma.$disconnect;
});
