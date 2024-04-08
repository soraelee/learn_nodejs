const express = require("express")
const app = express();
app.use("/static", express.static("./public"))

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded());

const session = require("express-session")
const config = require("./config/member/member_config")
app.use(session(config.sessionConfig))

const cookieParser = require("cookie-parser")
app.use(cookieParser());

const router = require("./src/router/router")(app)

app.use("/", router)

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.listen(3600, () => {console.log("quiz08 3600 port")})