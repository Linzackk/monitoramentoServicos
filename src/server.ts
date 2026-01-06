import app from "./app";
import "dotenv/config";
import "./queues/serviceHealth.worker"
import { startServiceHealthScheduler } from "./queues/serviceHealth.scheduler";

startServiceHealthScheduler();

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})