import { Request, Response } from "express";
import { SchoolClass } from "../classes/SchoolClass";
import { Student } from "../classes/Student";

export default async function editStudent(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, class_id } = req.body

      if (!email || !class_id) {
        res.statusCode = 422
        throw new Error("The class must have a value!")
     }


      const affectRows: number = await new Student().editStudentModule(email, {class_id})
      if(affectRows > 0){
        res.status(201).send({message: "The class has been updated successfully"})
     } else {
        res.status(404).send({message: "The class has not been updated"})
     }
     
      res.end()

   } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
        res.status(500).send({ message: "Internal server error" })
        } else {
        res.send({ message: error.message })
        }
   }
}