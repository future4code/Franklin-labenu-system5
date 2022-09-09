import { Request, Response } from "express"
import { Student } from "../classes/Student";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function createStudent(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, birthDate, class_id } = req.body
   
      if (!name || !email || !birthDate || !class_id) {
         res.statusCode = 422
         throw new Error("Fill in all fields")
      }

      const studentClass = new Student()
      const student = await studentClass.getByEmail(email)

      if (student) {
         res.statusCode = 409
         throw new Error('The email already exists')
      }

      const generate = new IdGenerator()
      const id: string = generate.generateId()

      const newStudent: user = { id, name, email, birthDate, class_id }

      await studentClass.create(newStudent)

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({id})

      res.status(201).send({ newStudent, token })

   } catch (error: any) {
       console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}