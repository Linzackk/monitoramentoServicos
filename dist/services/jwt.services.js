"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJWT = signJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
function signJWT(user) {
    const signedToken = jsonwebtoken_1.default.sign({
        user
    }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    return signedToken;
}
