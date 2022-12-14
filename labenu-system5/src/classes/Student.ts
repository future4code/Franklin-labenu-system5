import { BaseDatabase } from "../data/BaseDataBase"
import { user } from "../types"

export class Student extends BaseDatabase {
    public create = async (newStudent: user) => {
        await this.getConnection()
            ('student')
            .insert(newStudent)

    }

    public getByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection()('student')
            .where({ email }) 
        return result 
    }

    public getByName = async (name: string): Promise<user> => {
        const [result] = await this.getConnection()('student')
            .where({ name }) 
        return result 
    }

    public editStudentModule = async (email: string, columnsUpdate: {class_id: string}): Promise<number> => {
        const affectRows = await this.getConnection()
            ('student')
            .update(columnsUpdate)
            .where({email})
            return Number(affectRows)
    }
}