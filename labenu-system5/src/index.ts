import app from "./app"
import createSchoolClass from "./endpoints/createSchoolClass"
import createStudent from "./endpoints/createStudent"
import editSchoolClass from "./endpoints/editSchoolClass"

//ENDPOINTS API
app.post("/class/create", createSchoolClass)
app.post("/student/create", createStudent)
app.put("/class/edit", editSchoolClass)






