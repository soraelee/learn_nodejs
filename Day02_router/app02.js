//설정에 대한 내용만 담음
const express = require("express")
const router = require("./routers/test_router")

const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

// const router = express.Router(); // router라는 변수에 위임
app.use("/", router) //미들웨어 설정
//넘어온 uid 값을 router로 넘김

app.listen(3600, ()=> console.log("day2 app.js 실행"))