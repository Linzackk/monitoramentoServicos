import { Worker } from "bullmq";
import { redisConfig } from "./redis";
import { searchAllServicesDb } from "../database/services/services.read";
import axios from "axios";

new Worker(
    "service-health",
    async (job) => {
        const services = await searchAllServicesDb();

        if (services.length === 0) {
            console.log("Nenhum servico cadastrado")
            return;
        }

        const service = services[1];

        console.log("Verificando servico: ", service.name)

        try {
            const start = Date.now();

            await axios.get(service.url, {
                timeout: 5000
            });

            const duration = Date.now() - start;

            console.log("serviço online");
            console.log("tempo de resposta: ", duration, "ms")
        } catch (error) {
            console.log("Serviço offline")
        }
    },
    {
        connection: redisConfig
    }
);