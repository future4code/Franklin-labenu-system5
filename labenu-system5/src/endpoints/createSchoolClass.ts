import { Request, Response } from "express";
import { schoolClass }  from "../types";
import { SchoolClass } from "../classes/SchoolClass";

export default async function createSchoolClass(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, name, module } = req.body

      if (!name) {
        res.statusCode = 422
        throw new Error("The class must have a name!")
     }
   
      if (module > 0) {
         res.statusCode = 422
         throw new Error("the module must start at the value 0")
      }

      const newClass = new SchoolClass()
      const newSchoolClass: schoolClass = {id, name, module}

      await newClass.create(newSchoolClass)

      res.status(201).send({newSchoolClass})

   } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
        res.status(500).send({ message: "Internal server error" })
        } else {
        res.send({ message: error.message })
        }
   }
}