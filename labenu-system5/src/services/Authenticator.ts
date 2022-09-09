import * as jwt from "jsonwebtoken"
import { authData } from "../types"
import dotenv from "dotenv"

dotenv.config()

export default class Authenticator {
    static getData(token: string) {
        throw new Error("Method not implemented.")
    }

    generateToken = (payload: authData) => {
        return jwt.sign(payload, process.env.JWT_KEY as string),
        {
            expiresIn: "48h"
        }
    }
}