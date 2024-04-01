const express = require("express");
const router = require("./src/routes/common_router") //라우터 불러오기
const member_router = require("./src/routes/member/member_router") //라우터 불러오기

const app = express();

app.set('views', "./src/views")
app.set("view engine", "ejs")

//미들웨어를 사용해야 함 => app.use
app.use("/", router) //라우터를 연결해줌
app.use("/member", member_router) //라우터를 연결해줌

app.listen(3600, ()=>console.log("day02_Quiz app실행"))