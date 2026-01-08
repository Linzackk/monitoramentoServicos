"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarIncidents = procurarIncidents;
const utilNumbers_1 = require("../utils/utilNumbers");
const incidents_services_1 = require("../services/incidents.services");
async function procurarIncidents(req, res) {
    const id = Number(req.params.id);
    const quantity = Number(req.query.quantity);
    const searchedIncidents = await (0, incidents_services_1.getIncidentsById)(id, quantity);
    res.status(utilNumbers_1.statusCodes.OK).json({
        message: "Incidents encontrados",
        data: { incidents: searchedIncidents },
    });
}
