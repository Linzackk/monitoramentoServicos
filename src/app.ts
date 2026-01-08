import express from "express";
import servicesRoutes from "./routes/services.routes";
import servicesHealthRoutes from "./routes/servicesHealth.routes";
import incidentsRoutes from "./routes/incidents.routes";
import accountRoutes from "./routes/account.routes"
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

const app = express();

app.use(express.json());

// Instalar configurações depois

app.use("/services", servicesRoutes);

app.use("/servicesHealth", servicesHealthRoutes);

app.use("/incidents", incidentsRoutes);

app.use("/accounts", accountRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFound);
 
app.use(errorHandler);

export default app