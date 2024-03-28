const express = require('express');
const app = express(); //app에 express를 받아오겠다

//express를 사용하여 경로를 설정
//if else로 모든 경로를 지정하는 것보다 훨씬 분리하여 설정할 수 있음

//app : 통신을 하기 위한 방법으로 사용
app.set("views", './'); //main02에서 보여주는 기능을 찾아주세요
app.set("view engine", "ejs"); //보여주는 기능에 ejs를 사용할 것입니다. 

app.get("/", (req, res)=>{

    // res.send("기본페이지")
    res.render("index") 
    //index.ejs 라는 파일(템플릿)을 사용자에게 전송하도록 하겠습니다
})
app.get("/test", (req, res)=>{
    res.send("테스트 페이지")
})
// 앞으로는 위 내용도 파일로 만들어 할 수 있음

app.listen(3600, ()=>{ console.log("3600port 서버 구동")});


