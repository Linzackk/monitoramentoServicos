"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServiceDb = createServiceDb;
const prisma_1 = require("../../utils/prisma");
async function createServiceDb(name, url, environment) {
    try {
        const newService = await prisma_1.prisma.service.create({
            data: {
                name: name,
                url: url,
                environment: environment
            }
        });
        return newService;
    }
    catch (error) {
        throw new Error(error);
    }
}
