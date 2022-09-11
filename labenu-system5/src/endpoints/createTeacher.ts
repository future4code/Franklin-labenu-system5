import { Request, Response } from "express";
import { Teacher } from "../classes/Teacher";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { user } from "../types";

export default async function createTeacher(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, birthDate, class_id } = req.body;

    if (!name || !email || !birthDate || !class_id) {
      res.statusCode = 422;
      throw new Error("Fill in all fields");
    }

    const teacherClass = new Teacher();
    const teacher = await teacherClass.getByEmail(email);

    if (teacher) {
      res.statusCode = 409;
      throw new Error("The email already exists");
    }

    const generate = new IdGenerator();
    const id: string = generate.generateId();

    const newTeacher: user = { id, name, email, birthDate, class_id };

    await teacherClass.create(newTeacher);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    res.status(201).send({ newTeacher, token });
  } catch (error: any) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
