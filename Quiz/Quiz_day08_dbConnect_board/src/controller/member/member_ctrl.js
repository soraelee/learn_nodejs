const service = require("../../service/member/member_service")
const cookieConfig = require("../../../config/member/member_config").cookieConfig;

const login = (req, res) => {

    const isLogin = req.cookies.isLogin;
    res.render("member/login", {isLogin})
}

const login_check = async (req, res) => {
    req.session.uId = req.body.id
    req.session.uPwd = req.body.pwd
    const sessionValue = {uId: req.session.uId, uPwd: req.session.uPwd}
    if(req.body.id) {
        res.cookie("isLogin", sessionValue, cookieConfig)
    }
    const isLogin = req.cookies.isLogin;
    console.log("isLogin", isLogin)
    const msg = await service.loginChk(req.session.uId, req.session.uPwd);

    res.send(msg)
}
const logout = (req, res) => {
    req.session.destroy();
    res.cookie('isLogin','',{maxAge:0}); //쿠키 값 삭제
    res.send(service.getMessage("로그아웃 합니다", "/"))
}
const memberList = async (req, res) => {
    const member = await service.getAllMember();

    const isLogin = req.cookies.isLogin;
    

    res.render("member/list", {member, isLogin})
}
const registerForm = (req, res) => {
    const isLogin = req.cookies.isLogin;
    res.render("member/register_form", {isLogin})

}
const register = (req, res) => {
    const value = {
        ID : req.body.regid,
        PWD : req.body.regpwd,
        NAME : req.body.name,
        ADDR : req.body.addr
    }
    const insert = service.insert(value);
    res.send(insert)
}
const info = async (req, res) => {
    const uId = req.params.id
    let member = await service.memberInfo(uId);
    const isLogin = req.cookies.isLogin
    res.render("member/info", {isLogin, member})
}
const modifyForm = async (req, res) => {
    const uId = req.params.id
    let member = await service.memberInfo(uId)
    const isLogin = req.cookies.isLogin
    res.render("member/modify_form", {isLogin, member})
}
const modify = async (req, res) => {
    const value = {
        ID : req.body.id,
        PWD : req.body.pwd,
        NAME : req.body.name,
        ADDR : req.body.addr
    }
    const result = await service.modifyMember(value)
    res.send(result)
}
const deleteM = async (req, res) => {
    const uId = req.params.id
    // let member = await service.memberInfo(uId);
    
    // const value = {
    //     ID : member[0].ID,
    //     PWD : member[0].PWD,
    //     NAME : member[0].NAME,
    //     ADDR : member[0].ADDR
    // }
    const result = await service.deleteMember(uId)
    res.send(result)
}

module.exports = {login, login_check, logout, memberList, register, registerForm, info, modifyForm, deleteM, modify}