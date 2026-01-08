import jwt from "jsonwebtoken";
import "dotenv/config";
import { Account } from "@prisma/client";

export function signJWT(user: Account) {
    const signedToken = jwt.sign(
        {
            user
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "1h"
        }
    );
    return signedToken;
}
