import { BaseDatabase } from "../data/BaseDataBase"
import { schoolClass } from "../types"

export class SchoolClass extends BaseDatabase {
    public create = async (newClass: schoolClass) => {
        await this.getConnection()
            ('schoolClass')
            .insert(newClass)

    }

    public editModule = async (id: string, columnsUpdate: {module: string}): Promise<number> => {
        const affectRows = await this.getConnection()
            ('schoolClass')
            .update(columnsUpdate)
            .where({id})
            return Number(affectRows)
    }
}