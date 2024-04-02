const express = require("express")
const app = express();
let con;
app.get("/", (req, res) => {
    console.log("1. 연동 전,,")
    con = connect();
    con.then(msg => {
        console.log("3. 연동 완료 후 특정 기능 사용,,")
        res.send("con : " + msg)

    })
})
const connect = () => {
    let msg ;
    return new Promise((resolve)=>{

        setTimeout( () => { //콜백 함수 : 해당 함수 실행 시 내부 함수도 실행
            msg = "연동되었습니다";
            console.log("2. 연동하는 중,,,,,,,")
            
            resolve(msg);
        }, 1000); //1초에 한번씩 반복 실행 하겠습니다
    });
    // return msg; 
    
}

app.get("/async", async (req, res)=>{
    console.log("1111 연동 전 async")
    con = await connect();
    console.log("3333 받아온 객체 연산 async")
    res.send("con : " + con);
})

//오라클 연동
const oracleDB = require("oracledb")
const dbConfig = {
    user : "java",
    password : "1234",
    connectString : "localhost:1521/xe"
}
app.get("/connect", async (req, res) => {
    //1번 방식
    let con = await oracleDB.getConnection( dbConfig); //연결이 될떄까지 기다렸다가 연결이 되면 받음
    
    //2번 방식
    let con1 = oracleDB.getConnection(dbConfig);
    con1.then(res => {
        console.log("res : ", res)
    })
    console.log("con : ", con)
    console.log("con1 : ", con1)
    res.send("con : "+ con1)
})

app.listen(3600, () => console.log("day04 연결"))