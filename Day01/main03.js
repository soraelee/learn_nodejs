const express = require("express");
const app = express();

app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    //변수 만들기
    // res.render("index")//views/index
    res.render("index", {key:"value"}) // {key : value} 값이 index.ejs로 전달됨
})
app.get("/login", (req, res) => {
    const name ="홍길동";
    res.render("login", {n : name})
})
app.get("/logout", (req, res) => {
    const context = { // object 타입
        key1:"값1", key2:"값2"
        , key3:[10, 20, 30]
        , key4 : {k1 : "k11", k2 : "k12", k3 : "k13"} 
    }
    res.render("logout", {c: context}) //object 타입을 전달
})
app.get("/for", (req, res) => {
    const arr = [10, 20, 30]
    for (let i = 0; i < arr.length ; i++){

        console.log(arr[i])
    }
    console.log("-----------")
    arr.forEach((data) => {
        console.log('forEach : ' + data)
    }) 
    res.render("for")
})

app.get("/if", (req, res) => {
    const num = 100;
    if(num > 100) {
        console.log("100보다 크다")
    }else if(num > 80){
        console.log("80보다 크다")
    }else
        console.log("그 외의 값")
})
res.render("")

app.listen(3600, ()=> {console.log("main03 구동")})