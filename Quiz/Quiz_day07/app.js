const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded())
const router = require("./src/routers/router")(app)

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/", router)

app.listen(3000, () => {console.log("3000 quiz port")})