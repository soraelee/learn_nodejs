const member = require("../../db/session/session_mem")

const index = (req, res) => {
    res.render("session/index")
}
const setSession = (req, res) => {
    //세션을 설정하는 기능 - 사용자 정보
    req.session.name="홍길동" //세션의 키 : name , value : 홍길동
    req.session.age = 20;
    res.render("session/set_session")
}
const getSesseion = (req, res) => {
    const sessionValue = {name : req.session.name, age : req.session.age}
    res.render("session/get_session", sessionValue)
}
const delSesseion = (req, res) => {
    //특정 세션 삭제 시
    delete req.session.name; 

    //모든 세션 삭제 시
    // req.session.destroy()

    res.render("session/del_session")
}
// const DBId = "aaa", DBPwd = "aaa", DBNick = "홍길동";
const login = (req, res) => {
    res.render("session/login", {username : req.session.username})
    //이미 로그인 되어 있을 시 알림이 뜨도록 함
}
const loginCheck = (req, res) => {
    
    console.log("쿼리 : ", req.body)
    console.log("아이디 : ", req.body.id)
    console.log("비밀번호 : ", req.body.pwd)
    let msg = ""
    for (let i = 0 ; i < member.length ; i++) { //
        if(member[i].id === req.body.id && member[i].pwd === req.body.pwd){
            //아이디와 비밀번호가 맞으면 username = id 값, nick은 별명 값으로 진행
            req.session.username = member[i].id;
            req.session.nick = member[i].nick;
            return req.session.save(() => {
                res.redirect("/session/success")// "/"가 있으면 포트 번호 다음을 해당 값으로 대체
                                                // "/"가 없으면 마지막 페이지 다음 값을 해당 값으로 대체
            })

            // break;
            //if문이 끝나면 redirect 하고 종료하겠다
        }
    }
    
    msg = scriptMsg("로그인 실패", "/session/login")
    res.send(msg);
    // break;
    
    // res.send(msg);
}
const scriptMsg = (sMsg, sUrl) => { //sMsg와 sUrl을 넣으면 자동으로 메세지를 return 
    return `<script>
        alert("${sMsg}")
        location.href="${sUrl}"
        </script>`
}

const success = (req, res) => {
    if (req.session.username ) { //해당하는 값이 존재 한다면
        return res.render("session/success", {nick : req.session.nick})
    } 
    let msg = scriptMsg("로그인 먼저 하세요", "/session/login")
    res.send(msg)
}
const logout = (req, res) => {
    req.session.destroy(() => {console.log("모든 세션을 만료 합니다")}) //callback 기능
    res.redirect("/session/login")
}
module.exports = {loginCheck, index, setSession, getSesseion, 
                    delSesseion, login, success, logout};