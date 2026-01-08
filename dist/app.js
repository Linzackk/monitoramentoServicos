"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_routes_1 = __importDefault(require("./routes/services.routes"));
const servicesHealth_routes_1 = __importDefault(require("./routes/servicesHealth.routes"));
const incidents_routes_1 = __importDefault(require("./routes/incidents.routes"));
const account_routes_1 = __importDefault(require("./routes/account.routes"));
const notFound_1 = require("./middleware/notFound");
const errorHandler_1 = require("./middleware/errorHandler");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Instalar configurações depois
app.use("/services", services_routes_1.default);
app.use("/servicesHealth", servicesHealth_routes_1.default);
app.use("/incidents", incidents_routes_1.default);
app.use("/accounts", account_routes_1.default);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
exports.default = app;
