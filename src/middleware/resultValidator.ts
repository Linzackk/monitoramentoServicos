import { Request, Response, NextFunction} from "express";
import { FieldValidationError, validationResult } from "express-validator";
import { statusCodes } from "../utils/statusCode";

export function validarResultado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorsResponse = errors.array().map(error => {
            const fieldError = error as FieldValidationError;
            return {
                field: fieldError.path,
                message: fieldError.msg,
            };
        });

        return res.status(statusCodes.BAD_REQUEST).json({
        errors: errorsResponse,
        });
    }

    next();
}