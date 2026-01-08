import { checkServicesMs } from "../utils/utilNumbers";
import { serviceHealthQueue } from "./serviceHealth.queue";

export async function startServiceHealthScheduler() {

    await serviceHealthQueue.add(
        "check-services",
        {},
        {
            jobId: "service-health-scheduler",
            repeat: { every: checkServicesMs }
        }
    );
}