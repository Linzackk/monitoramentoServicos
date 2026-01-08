"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = verifyJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = require("../utils/appError");
const utilNumbers_1 = require("../utils/utilNumbers");
function verifyJWT(req, res, next) {
    const { authorization } = req.headers;
    if (typeof authorization !== "string") {
        throw new appError_1.AppError("Token invalido", utilNumbers_1.statusCodes.BAD_REQUEST);
    }
    try {
        const token = authorization.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        next();
    }
    catch (error) {
        new appError_1.AppError("Token invalido", utilNumbers_1.statusCodes.FORBIDDEN);
    }
}
