const express = require("express");
const commonRouter = require("./src/routes/common_router")
const loginRouter = require("./src/routes/login/login_router")
const shopRouter = require("./src/routes/shop/shop_router")
const cookieParser = require("cookie-parser")
const app = express();

const config = require("./Config/config")
const session = require("express-session")
const bodyParser = require("body-parser")

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use(cookieParser())
app.use(session(config.sessionConfig))
app.use(bodyParser.urlencoded({extended : false}))
app.use("/", commonRouter)
app.use("/login", loginRouter)
app.use("/shop", shopRouter)

app.listen(3600, () => console.log("quiz_day04 실행"))