const express = require("express");
const app = express();

//내용이 많아 post 방식 활용
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded())

app.use("/static", express.static("./public"))
const router = require("./src/routers/router")(app)
app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", router)

app.get("/", (req, res) => res.send("test"))

app.listen(3000, ()=> console.log("3000 server"))