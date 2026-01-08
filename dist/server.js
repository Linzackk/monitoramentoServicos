"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
require("./queues/serviceHealth.worker");
const serviceHealth_scheduler_1 = require("./queues/serviceHealth.scheduler");
(0, serviceHealth_scheduler_1.startServiceHealthScheduler)();
app_1.default.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
