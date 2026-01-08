import { prisma } from "../../utils/prisma";
import { CurrentStatus } from "@prisma/client";

export async function createServiceHealthDb(
    serviceId: number
) {
    try {
        const newServiceHealth = await prisma.serviceHealth.create({
            data: {
                service_id: serviceId,
                current_status: "ONLINE",
                last_checked_at: new Date()
            }
        })
        return newServiceHealth;
    } catch (error: any) {
        throw new Error(error);
    }
}