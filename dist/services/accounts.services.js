"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.findUser = findUser;
exports.loginAccount = loginAccount;
const bcrypt_1 = __importDefault(require("bcrypt"));
const accounts_create_1 = require("../database/accounts/accounts.create");
const accounts_read_1 = require("../database/accounts/accounts.read");
const appError_1 = require("../utils/appError");
const jwt_services_1 = require("./jwt.services");
const utilNumbers_1 = require("../utils/utilNumbers");
async function createUser(user, password) {
    try {
        const hashPassword = bcrypt_1.default.hashSync(password, 10);
        const createdUser = await (0, accounts_create_1.createUserDb)(user, hashPassword);
        return createdUser;
    }
    catch (error) {
        throw error;
    }
}
async function findUser(user, password) {
    try {
        const searchedUser = await (0, accounts_read_1.searchUserDb)(user);
        if (!searchedUser)
            throw new appError_1.AppError("Usuario nao encontrado", utilNumbers_1.statusCodes.NOT_FOUND);
        if (!bcrypt_1.default.compareSync(password, searchedUser.password)) {
            throw new appError_1.AppError("Usuario nao encontrado", utilNumbers_1.statusCodes.NOT_FOUND);
        }
        return searchedUser;
    }
    catch (error) {
        throw error;
    }
}
async function loginAccount(user, password) {
    try {
        const searchedUser = await findUser(user, password);
        const token = (0, jwt_services_1.signJWT)(searchedUser);
        return token;
    }
    catch (error) {
        throw new appError_1.AppError(error.message, utilNumbers_1.statusCodes.SERVER_ERROR);
    }
}
