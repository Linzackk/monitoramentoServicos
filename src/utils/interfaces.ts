import { Environment } from "@prisma/client";

export interface UpdateService {
    name?: string,
    url?: string,
    environment?: Environment
}

export interface CheckService {
    responseTime: number;
    checkedAt: Date;
}