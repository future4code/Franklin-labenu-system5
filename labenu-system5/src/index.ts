import app from "./app"
import createSchoolClass from "./endpoints/createSchoolClass"
import createStudent from "./endpoints/createStudent"

//ENDPOINTS API
app.post("/class/create", createSchoolClass)
app.post("/student/create", createStudent)






