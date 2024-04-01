const express = require("express")
const DBMember = require("./db/memberDAO");


const app = express()

app.set("views", "./views")
app.set("view engine", "ejs")

const router = express.Router(); // router라는 변수에 위임
app.use("/", router) //미들웨어 설정

router.get("/", (req, res) => {
    res.render("index")
    console.log(DBMember)
})

const router2 = express.Router(); // router2 : 회원을 관리(다른 기능을 진행)
app.use("/member", router2) //router2의 미들웨어 설정

router2.get("/", (req, res) => {
    res.send("member 기본 페이지 입니다")
})
router2.get("/list", (req, res) => {
    res.send("member 목록을 보여줍니다")
})


/*
app.get("/", (req, res) => {
    res.render("index")
})
*/
app.listen(3600, ()=> console.log("day2 app.js 실행"))