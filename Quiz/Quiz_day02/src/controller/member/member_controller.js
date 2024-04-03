const memberList = require("../../database/member/memberDAO")
const service = require("../../service/member/member_service")

const login = (req, res) => {
    res.render("member/login")
}

const login_check = (req, res) => {
    const memberId = req.query.id;

    let idChk = 0;
    memberList.forEach((data) => {
        if (data.id === memberId){
            idChk++;
        }
    })
    let msg=''
    if (idChk === 1){

        msg = `<script>
        alert("로그인 완료")
        location.href="list";
        </script>
        `
    } else {
        msg = `<script>
        alert("다시 입력 하세요")
        location.href="login"
        </script>
        `
    }

    res.send(msg)
    // res.redirect("login") //왜 에러가 나지 - 이중이라 그런강
    // console.log("로그인 체크 완료")
}
const list = (req, res) => {
    res.render("member/list", {memberList})
}
const info = (req, res) => {
    const member = service.getMember(req.param("uId"))

    res.render("member/info", {member}) 
}

module.exports = {login, login_check, list, info};