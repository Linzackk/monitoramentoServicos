import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";
import { statusCodes } from "../utils/utilNumbers";

export function verifyJWT(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const {authorization} = req.headers;
    if (typeof authorization !== "string") {
        throw new AppError ("Token invalido", statusCodes.BAD_REQUEST);
    }
    try {
        const token = authorization.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET as string);
        next();
    } catch (error: any) {
        new AppError("Token invalido", statusCodes.FORBIDDEN)
    }
}