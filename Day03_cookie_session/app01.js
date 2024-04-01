const express = require("express")
const cookieRouter = require("./src/routes/cookie/cookie_router");
const cookieParser = require("cookie-parser")

// const config = require("./config/cookie_session/config")
// const sessionRouter = require("./src/routes/session/session_router")
// const session = require("express-session")

const app = express()

app.set("views", "./src/views")
app.set("view engine", "ejs")

// app.use( cookieParser("아무거나 키로 넣기") ); //cookie paser을 app에서 사용하게끔 해줌
app.use( cookieParser() ); //cookie paser을 app에서 사용하게끔 해줌
//미들웨어 위에 cookie-paser를 적용해야 원활히 적용
app.use("/cookie", cookieRouter)
// app.use( session(config.sessionConfig) ) 
//해당 하는 값으로 세션 생성
// app.use( "/session", sessionRouter) 

app.listen(3600, () => {
    console.log("3600 service")
})