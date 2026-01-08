"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServiceDb = updateServiceDb;
const prisma_1 = require("../../utils/prisma");
async function updateServiceDb(serviceId, data) {
    try {
        const updatedService = prisma_1.prisma.service.update({
            where: { id: serviceId },
            data: data
        });
        return updatedService;
    }
    catch (error) {
        throw error;
    }
}
