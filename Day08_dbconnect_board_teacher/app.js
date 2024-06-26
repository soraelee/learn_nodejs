const express = require("express");

const app = express();

app.use("/static", express.static("./public"))

const bodyParser = require("body-parser");
app.use( bodyParser.urlencoded() );
app.use( bodyParser.json() ); //json 값으로 넘어오는 것도 받을 수 있음


const session = require("express-session");
const sessionConfig = require("./config/cookie_session/cookie_session_config");
app.use( session(sessionConfig.sessionConfig) );

const cookieParser = require("cookie-parser");
app.use( cookieParser() );

const router = require("./src/routers/router")(app);

app.use("/", router);

app.set("views","./src/views");
app.set("view engine","ejs");

app.listen(3000,()=>{ console.log("3000 port server"); });
