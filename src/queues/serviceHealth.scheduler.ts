import { serviceHealthQueue } from "./serviceHealth.queue";

export async function startServiceHealthScheduler() {

    await serviceHealthQueue.add(
        "check-services",
        {},
        {
            jobId: "service-health-scheduler",
            repeat: { every: 60_000 }
        }
    );
}