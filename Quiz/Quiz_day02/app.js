const express = require("express")
const app = express();
const common_router = require("../src/routes/common_router")
const member_router = require("../src/routes/member/member_router")

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use("/", common_router) // 기본 페이지에 common router가 연동
app.use("/member", member_router) // 기본 페이지에 common router가 연동

app.listen(3000, () => console.log("quiz 연동"))