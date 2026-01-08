"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServiceHealthDb = deleteServiceHealthDb;
const prisma_1 = require("../../utils/prisma");
async function deleteServiceHealthDb(serviceId) {
    try {
        const deletedServiceHealth = await prisma_1.prisma.serviceHealth.delete({
            where: {
                service_id: serviceId,
            }
        });
        return deletedServiceHealth;
    }
    catch (error) {
        throw new Error(error);
    }
}
