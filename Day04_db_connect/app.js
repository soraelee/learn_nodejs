const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded());
//post 방식을 사용하기 위함
const router = require("./src/routers/router")(app)
//app을 전달하여 공통 라우터에서 사용 할 수 있도록 함

app.use("/", router) //기본 라우터만 설정

app.set("views", "./src/views")
app.set("view engine", "ejs")


app.listen(3600, () => console.log("day04 db connect"))