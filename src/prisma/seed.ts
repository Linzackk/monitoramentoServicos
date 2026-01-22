import { PrismaClient } from "@prisma/client";
import "dotenv/config"
import bcrypt from "bcrypt"
import { prisma } from "../utils/prisma";

const password = "admin123"
const user = "admin"


async function main() {
    const exists = await prisma.account.findFirst({
        where: { user: user }
    })

    if (!exists) {
        const cryptedPassword = await bcrypt.hash(password, 10)

        const createdUser = await prisma.account.create({
            data: {
                user: user,
                password: cryptedPassword
            }   
        })
    }
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect
    })