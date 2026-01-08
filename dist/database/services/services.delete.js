"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServiceDb = deleteServiceDb;
const prisma_1 = require("../../utils/prisma");
async function deleteServiceDb(serviceId) {
    try {
        const deletedService = await prisma_1.prisma.service.delete({
            where: {
                id: serviceId,
            }
        });
        return deletedService;
    }
    catch (error) {
        throw new Error(error);
    }
}
