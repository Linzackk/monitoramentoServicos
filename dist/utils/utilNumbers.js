"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkServicesMs = exports.ResponsTimeMs = exports.statusCodes = void 0;
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["OK"] = 200] = "OK";
    statusCodes[statusCodes["CREATED"] = 201] = "CREATED";
    statusCodes[statusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    statusCodes[statusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    statusCodes[statusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    statusCodes[statusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    statusCodes[statusCodes["CONFLICT"] = 409] = "CONFLICT";
    statusCodes[statusCodes["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(statusCodes || (exports.statusCodes = statusCodes = {}));
var ResponsTimeMs;
(function (ResponsTimeMs) {
    ResponsTimeMs[ResponsTimeMs["OFFLINE"] = 5000] = "OFFLINE";
    ResponsTimeMs[ResponsTimeMs["INSTAVEL"] = 1000] = "INSTAVEL";
})(ResponsTimeMs || (exports.ResponsTimeMs = ResponsTimeMs = {}));
exports.checkServicesMs = 60000;
