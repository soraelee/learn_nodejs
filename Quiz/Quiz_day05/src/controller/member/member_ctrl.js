const service = require("../../service/member/member_service")

const login = (req, res) => {
    req.session.uId = req.body.id
    req.session.uPwd = req.body.pwd
    const sessionValue = {uId: req.session.uId, uPwd: req.session.uPwd}
    res.render("member/login", {sessionValue})
}

const login_check = async (req, res) => {
    req.session.uId = req.body.id
    req.session.uPwd = req.body.pwd

    console.log("session Id", req.session.uId )
    console.log("session pwd", req.session.uPwd )

    const msg = await service.loginChk(req.session.uId, req.session.uPwd);

    res.send(msg)
}
const logout = () => {

}

module.exports = {login, login_check}