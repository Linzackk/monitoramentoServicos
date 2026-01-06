import { CurrentStatus, Environment } from "../prisma/prisma/enums";

export interface UpdateService {
    name?: string,
    url?: string,
    environment?: Environment
}

export interface CheckService {
    responseTime: number;
    checkedAt: Date;
}