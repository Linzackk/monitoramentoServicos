import { createIncidentDb } from "../database/incidents/incidents.create";
import { getIncidentsByServiceIdDb } from "../database/incidents/incidents.read";
import { updateIncidentDb } from "../database/incidents/incidents.update";
import { CurrentStatus, IncidentStatus } from "../prisma/prisma/enums";
import { dateToSeconds } from "../utils/dateSeconds";

export async function getIncidentsById(serviceId: number, quantity: number = 1) {
    try {
        const searchedIncidents = await getIncidentsByServiceIdDb(serviceId, quantity);
        return searchedIncidents;
    } catch (error: any) {
        throw error;
    }
}

export async function manageIncidents(
    serviceId: number,
    status: CurrentStatus,
    startedAt: Date,
    endedAt: Date,
    reason ?: string
) {
    try {
        if (status === "ONLINE") {
            const uptatedIncident = await updateIncident(serviceId, endedAt, reason);
            return uptatedIncident;
        }
        const createdIncident = await createIncident(serviceId, status, startedAt);
        return createdIncident;
    } catch (error: any) {
        console.error({
        name: error.name,
        message: error.message,
        stack: error.stack,
    });
    }
}

export async function createIncident(
    serviceId: number,
    status: IncidentStatus,
    startedAt: Date,
) {
    try {
        const createdIncident = await createIncidentDb(serviceId, status, startedAt);
        return createdIncident;
    } catch (error: any) {
        throw error;
    }
}

export async function updateIncident(
    serviceId: number,
    endedAt: Date,
    reason ?: string
) {
    try {
        const quantityCheck = 1;
        const incidents = await getIncidentsByServiceIdDb(serviceId, quantityCheck);
        const lastIncident = incidents[0]
        const durationSeconds = dateToSeconds(lastIncident.started_at) - dateToSeconds(endedAt);

        const uptatedIncident = await updateIncidentDb(lastIncident.id, endedAt, durationSeconds, reason);
        return uptatedIncident;
    } catch (error: any) {
        throw error;
    }
}