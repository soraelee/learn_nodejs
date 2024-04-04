const express = require("express");
const app = express();

app.set("views", __dirname+"/views")
app.set("view engine", "ejs")

let members = [
    {id : "aaa", pwd : "aaa", name : "홍길동a", addr : "a산골짜기"},
    {id : "bbb", pwd : "bbb", name : "홍길동b", addr : "b산골짜기"},
    {id : "ccc", pwd : "ccc", name : "홍길동c", addr : "c산골짜기"}
]
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/get_members", (req, res) => {
    res.json(members)
})
const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json()) //데이터 받기 - json을 받으려면 필요
app.post("/register", (req, res) => {
    console.log("req.body : ", req.body) //body- parser을 통해 데이터 받아오기
    members = members.concat(req.body);
    res.json(1); //1이라는 값을 돌려줌 - 1 이면 성공 이런 의미
})
app.get("/search/:id", (req, res)=> {
    console.log(req.params);
    const result = members.filter(mem => mem.id === req.params.id)
    console.log("result : ", result);
    res.json(result[0])
})
app.put("/modify", (req, res) => {
    //update members set name = ? ..
    members = members.filter(mem => mem.id !== req.body.id)
    members = members.concat(req.body);
    res.json(1)
})
app.delete("/delete", (req, res) => {
    members = members.filter(mem => mem.id !== req.body.id)
    res.json(1)
})
app.listen(3000, () => console.log("3000server"))