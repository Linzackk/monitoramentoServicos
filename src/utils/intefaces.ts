import { Environment } from "../prisma/prisma/enums";

export interface UpdateService {
    name?: string,
    url?: string,
    environment?: Environment
}