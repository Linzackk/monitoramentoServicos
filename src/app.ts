import express from "express";
import servicesRoutes from "./routes/services.routes";
import servicesHealthRoutes from "./routes/servicesHealth.routes";

const app = express();

app.use(express.json());

// Instalar configurações depois

app.use("/services", servicesRoutes);

app.use("/servicesHealth", servicesHealthRoutes);

// app.use(pagina principal global)

// app.use(middlewareglobal)

export default app