import { Request, Response } from "express"
import { Student } from "../classes/Student";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function getStudentByName(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const name = req.params.name
        const student = new Student()
        const result = await student.getByName(name)

        res.send({
            result: {
                name: result.name,
                email: result.email,
                birthDate: result.birthDate,
                class_id: result.class_id

            }
        })


    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}