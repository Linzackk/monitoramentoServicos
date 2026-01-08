"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchServiceByUrlDb = searchServiceByUrlDb;
exports.searchServiceByIdDb = searchServiceByIdDb;
exports.searchAllServicesDb = searchAllServicesDb;
const prisma_1 = require("../../utils/prisma");
async function searchServiceByUrlDb(url) {
    try {
        const serviceSearched = await prisma_1.prisma.service.findFirst({
            where: {
                url: url
            }
        });
        return serviceSearched;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function searchServiceByIdDb(id) {
    try {
        const serviceSearched = await prisma_1.prisma.service.findUnique({
            where: {
                id: id,
            }
        });
        return serviceSearched;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function searchAllServicesDb() {
    const services = await prisma_1.prisma.service.findMany();
    return services;
}
