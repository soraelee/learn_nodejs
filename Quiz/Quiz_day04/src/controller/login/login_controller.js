const member = require("../../database/login/login")

const login = (req, res) => {
    res.render("login/login", {username : req.session.username})
}
const scriptMsg = (sMsg, sUrl) =>  `<script>
                alert("${sMsg}")
                location.href="${sUrl}"
                </script>`

const loginChk = (req, res) => {
    console.log("req.body : ", req.body)
    console.log("req.body.id : ", req.body.id)
    console.log("req.body.pwd : ", req.body.pwd)

    for(let i = 0 ; i < member.length ; i++){
        if(member[i].id === req.body.id && member[i].pwd === req.body.pwd){
            req.session.username = member[i].id
            req.session.nick = member[i].nick

            return req.session.save(() => {
                res.redirect("/login/success")
            })
        }
    }
    let msg = scriptMsg("로그인 실패", "/login")
    res.send(msg)

}
const success = (req, res) => {
    res.render("login/success", {nick : req.session.nick})
}
const logout = (req, res) => {
    req.session.distroy(()=> console.log("모든 세션을 만료합니다"));
    res.redirect("/")
}

module.exports = {login, loginChk, success, logout}