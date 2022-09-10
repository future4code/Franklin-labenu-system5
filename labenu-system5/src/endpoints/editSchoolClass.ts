import { Request, Response } from "express";
import { schoolClass }  from "../types";
import { SchoolClass } from "../classes/SchoolClass";

export default async function editSchoolClass(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, module } = req.body

      if (!module) {
        res.statusCode = 422
        throw new Error("The module must have a value!")
     }
   
      if (module < 0 && module > 6) {
         res.statusCode = 422
         throw new Error("The module must have between 0 and 6")
      }

      const affectRows = await new SchoolClass().editModule(id, {module})
      if(affectRows > 0){
        res.status(201).send({message: "The module has been updated successfully"})
     } else {
        res.status(404).send({message: "The module has not been updated"})
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