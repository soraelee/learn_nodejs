const express = require("express")
const bcrypt = require("bcrypt")
const app = express();

app.get("/", (req, res) =>{
    const pwd = "test";
    // const changePwd = bcrypt.hash(pwd, 10);
    // console.log(changePwd);
    // changePwd.then(res => console.log(res))
    const changePwd = bcrypt.hashSync(pwd, 10);
    console.log(changePwd);
    const result = bcrypt.compareSync(pwd, changePwd)
    console.log(result);
    res.send("/경로")

})

app.listen(3000, ()=>console.log("bcrypt 실행"))