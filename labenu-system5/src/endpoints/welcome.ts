import {Request, Response} from "express"
import connection from "../connection"

export const getMessage = async (): Promise<any> => {
      return {message: "Welcome to LabeSystem 5 "}
  }

const getWellMessage = async (req: Request, res: Response) => {
    try {
       const result = await getMessage()
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
}

export default getWellMessage