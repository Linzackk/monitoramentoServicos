"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarServiceHealth = procurarServiceHealth;
const utilNumbers_1 = require("../utils/utilNumbers");
const servicesHealth_services_1 = require("../services/servicesHealth.services");
async function procurarServiceHealth(req, res) {
    const id = Number(req.params.id);
    const serviceHealth = await (0, servicesHealth_services_1.searchServiceHealthById)(id);
    return res.status(utilNumbers_1.statusCodes.OK).json({
        message: "Service Health encontrado",
        data: { serviceHealth },
    });
}
