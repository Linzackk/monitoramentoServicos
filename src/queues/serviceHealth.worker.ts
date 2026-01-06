import { Worker } from "bullmq";
import { redisConfig } from "./redis";
import { searchAllServicesDb } from "../database/services/services.read";
import { checkAllServices } from "../services/servicesHealth.services";

new Worker(
    "service-health",
    async () => {
        const services = await searchAllServicesDb();

        await checkAllServices(services);  
    },
    {
        connection: redisConfig
    }
);