import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API de Monitoramento de Serviços",
        version: "1.0.0",
        description: "Uma API com o objetivo de verificar, verificar e documentar os Status de serviços.",
    },
};

const options = {
    swaggerDefinition,
    apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);