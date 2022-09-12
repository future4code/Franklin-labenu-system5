import { Request, Response } from "express";
import { Teacher } from "../classes/Teacher";
import { user } from "../types";

export const getAllTeachers = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const teacher = new Teacher();
    const teachers: user[] = await teacher.getAllTeachersFunction();
    const allTeachers = teachers?.map((teacher: user) => {
      return teacher;
    });
    res.status(202).send({ teachers: allTeachers });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};
