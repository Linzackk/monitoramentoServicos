"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
