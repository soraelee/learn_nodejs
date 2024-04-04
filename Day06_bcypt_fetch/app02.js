const express = require("express");
const app = express();


console.log("dirname : ", __dirname) 
//현재 파일의 절대 경로 표현

app.set("views", __dirname+"/views")
app.set("view engine", "ejs")

let count = 0;
app.get("/non_fetch", (req, res) => {
    console.log("non_fetch 연동")
    count++
    res.render("non_fetch", {count});
    //클릭시 페이지가 새로 출력되지는 않지만
    //웹에서 통신을 보내면 해당 통신을 서버가 받아서 다시 ejs를 번역함
})

app.get("/fetch01", (req, res) =>{
    console.log("fetch01 : ", count++)
    res.render("fetch01", {count})
})
app.get("/getcount", (req, res) =>{
    console.log("getcount : ", count++)
    // res.render("fetch01", {count})
    //json 방식을 통해 값을 전달
    res.json({cnt : count})
})
app.get("/rest", (req, res) => {
    res.render("rest")
})
app.get("/test", (req, res) => {
    res.json("get 데이터 요청할 때")
})
app.post("/test", (req, res) => {
    res.json("post 데이터 추가할 때")
})
app.put("/test", (req, res) => {
    res.json("put 데이터 수정할 때")
})
app.delete("/test", (req, res) => {
    res.json("delete 데이터 삭제할 때")
})

app.listen(3000, () => console.log("3000server"))