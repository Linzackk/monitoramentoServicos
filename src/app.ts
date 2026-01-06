import express from "express";
import servicesRoutes from "./routes/services.routes";
import servicesHealthRoutes from "./routes/servicesHealth.routes";
import incidentsRoutes from "./routes/incidents.routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

// Instalar configurações depois

app.use("/services", servicesRoutes);

app.use("/servicesHealth", servicesHealthRoutes);

app.use("/incidents", incidentsRoutes)

app.use(notFound);
 
app.use(errorHandler);

export default app