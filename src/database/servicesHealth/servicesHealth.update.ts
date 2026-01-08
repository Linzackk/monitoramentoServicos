import { CurrentStatus } from "@prisma/client";
import { prisma } from "../../utils/prisma";

export async function updateServiceHealthDb(
    serviceId: number, 
    currentStatus: CurrentStatus, 
    lastChecked: Date, 
    lastResponseTimeMs: number
) {
    const updatedService = await prisma.serviceHealth.update({
        where: {service_id: serviceId},
        data: {
            current_status: currentStatus,
            last_checked_at: lastChecked,
            last_response_time_ms: lastResponseTimeMs
        }
    });
    return updatedService;
}