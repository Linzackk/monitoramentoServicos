"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncidentsById = getIncidentsById;
exports.manageIncidents = manageIncidents;
exports.createIncident = createIncident;
exports.updateIncident = updateIncident;
const incidents_create_1 = require("../database/incidents/incidents.create");
const incidents_read_1 = require("../database/incidents/incidents.read");
const incidents_update_1 = require("../database/incidents/incidents.update");
const dateSeconds_1 = require("../utils/dateSeconds");
async function getIncidentsById(serviceId, quantity = 1) {
    try {
        const searchedIncidents = await (0, incidents_read_1.getIncidentsByServiceIdDb)(serviceId, quantity);
        return searchedIncidents;
    }
    catch (error) {
        throw error;
    }
}
async function manageIncidents(serviceId, status, startedAt, endedAt, reason) {
    try {
        if (status === "ONLINE") {
            const uptatedIncident = await updateIncident(serviceId, endedAt, reason);
            return uptatedIncident;
        }
        const createdIncident = await createIncident(serviceId, status, startedAt);
        return createdIncident;
    }
    catch (error) {
        console.error({
            name: error.name,
            message: error.message,
            stack: error.stack,
        });
    }
}
async function createIncident(serviceId, status, startedAt) {
    try {
        const createdIncident = await (0, incidents_create_1.createIncidentDb)(serviceId, status, startedAt);
        return createdIncident;
    }
    catch (error) {
        throw error;
    }
}
async function updateIncident(serviceId, endedAt, reason) {
    try {
        const quantityCheck = 1;
        const incidents = await (0, incidents_read_1.getIncidentsByServiceIdDb)(serviceId, quantityCheck);
        const lastIncident = incidents[0];
        const durationSeconds = (0, dateSeconds_1.dateToSeconds)(endedAt) - (0, dateSeconds_1.dateToSeconds)(lastIncident.started_at);
        const uptatedIncident = await (0, incidents_update_1.updateIncidentDb)(lastIncident.id, endedAt, durationSeconds, reason);
        return uptatedIncident;
    }
    catch (error) {
        throw error;
    }
}
