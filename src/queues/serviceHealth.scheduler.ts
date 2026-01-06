import { serviceHealthQueue } from "./serviceHealth.queue";

export async function startServiceHealthScheduler() {
    console.log("schedule iniciado")
    await serviceHealthQueue.add(
        "check-services",
        {},
        {
            repeat: {
                every: 60_000
            }
        }
    );
}