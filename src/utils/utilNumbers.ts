export enum statusCodes {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    SERVER_ERROR = 500,
}

export enum ResponsTimeMs {
    OFFLINE = 5000,
    INSTAVEL = 1000,
}

export const checkServicesMs = 60_000
