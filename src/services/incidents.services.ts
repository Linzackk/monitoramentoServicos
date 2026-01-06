import { getIncidentsByIdDb } from "../database/incidents/incidents.read";

export async function getIncidentsById(serviceId: number, quantity: number = 1) {
    try {
        const searchedIncidents = await getIncidentsByIdDb(serviceId, quantity);
        return searchedIncidents;
    } catch (error: any) {
        throw error
    }
}