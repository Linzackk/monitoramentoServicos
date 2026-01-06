import { Worker } from "bullmq";
import { redisConfig } from "./redis";
import { searchAllServicesDb } from "../database/services/services.read";


new Worker(
    "service-health",
    async (job) => {
        const services = await searchAllServicesDb();

        console.log("Serviços: ", services.length)
    },
    {
        connection: redisConfig
    }
);