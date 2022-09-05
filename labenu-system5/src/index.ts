import app from "./app"
import getWellMessage from "./endpoints/welcome"

//ENDPOINTS API
app.get("/welcome", getWellMessage)





