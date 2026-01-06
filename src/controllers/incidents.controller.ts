import { Request, Response } from "express";
import { statusCodes } from "../utils/statusCode";
import { getIncidentsById } from "../services/incidents.services";

export async function procurarIncidents(req: Request, res: Response) {
    const id = Number(req.params.id)
    const quantity = Number(req.query.quantity)

    const searchedIncidents = await getIncidentsById(id, quantity);

    res.status(statusCodes.OK).json({
        message: "Incidents encontrados",
        data: {incidents: searchedIncidents},
    })
}