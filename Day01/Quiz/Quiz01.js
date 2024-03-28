const express = require("express");
const app = express();

app.set("views", "./")
app.set("view engine", "ejs");


app.get("/member", (req, res) => {
    context = {
        arr : ['홍길동', '20', '산골짜기'],
        obj : {'name' : '김개똥', 'age':'30살', 'addr':'개똥별'},
        name : '고길동', age : '40살', addr:'마포구'
    }
    res.render("member", {context:context}); // == {context} value 값 생략 가능 
})

app.get("/for_quiz", (req, res) => {
    context = {
        "rank" : [
            [1, 2, 3, 4, 5], 
            ["육", "7", "팔", "구", "10"],
            [11, 12, 13, 14, 15]
        ]
    }
    context.rank.forEach((data)=>console.log(data))
    res.render("for_quiz", context)
})

app.get("/url", (req, res) => {
    context={
        "url":[
            {"네이버" : "https://www.naver.com/"},
            {"구글" : "https://www.google.co.kr/"},
            {"다음" : "https://www.daum.net/"},
        ]
    }
    res.render("url", context)
})
app.listen(3600, ()=>{console.log("quiz02 구동")})