import express from "express";

const app = express();

app.use(express.json());

// Instalar configurações depois

// app.use(pagina principal global)

// app.use(middlewareglobal)

export default app