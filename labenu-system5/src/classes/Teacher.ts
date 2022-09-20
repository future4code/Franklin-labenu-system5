import { BaseDatabase } from "../data/BaseDataBase";
import { user } from "../types";

export class Teacher extends BaseDatabase {
  public create = async (newTeacher: user) => {
    await this.getConnection()("teacher").insert(newTeacher);
  };

  public getByEmail = async (email: string): Promise<user> => {
    const [result] = await this.getConnection()("teacher").where({ email });
    return result;
  };

  public getAllTeachersFunction = async (): Promise<any> => {
    return await this.getConnection().select("*").from("teacher");
  };
}
