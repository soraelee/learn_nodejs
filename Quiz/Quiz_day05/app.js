const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const config = require("./config/member/member_config")

const app = express();
app.use(session(config.sessionConfig))
app.use(bodyParser.urlencoded());

const router = require("./src/router/router")(app)

app.use("/", router)

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.listen(3600, () => {console.log("quiz05 3600 port")})