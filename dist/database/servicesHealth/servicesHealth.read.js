"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchServiceHealthByIdDb = searchServiceHealthByIdDb;
const prisma_1 = require("../../utils/prisma");
async function searchServiceHealthByIdDb(serviceHealthId) {
    try {
        const searchedServiceHealth = prisma_1.prisma.serviceHealth.findUnique({
            where: { service_id: serviceHealthId }
        });
        return searchedServiceHealth;
    }
    catch (error) {
        throw error;
    }
}
