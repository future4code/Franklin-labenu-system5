import app from "./app";
import createSchoolClass from "./endpoints/createSchoolClass";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher";
import editSchoolClass from "./endpoints/editSchoolClass";
import editStudent from "./endpoints/editStudent";
import { getAllTeachers } from "./endpoints/getAllTeachers";
import getStudentByName from "./endpoints/getStudentByName";

//ENDPOINTS API
app.post("/class/create", createSchoolClass);
app.post("/student/create", createStudent);
app.post("/teacher/create", createTeacher);
app.put("/class/edit", editSchoolClass);
app.put("/student/edit", editStudent);
app.get("/teacher/all", getAllTeachers);
app.get("/getStudentByName/:name", getStudentByName)
