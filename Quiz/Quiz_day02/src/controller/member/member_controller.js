const memberList = require("../../database/member/memberDAO");

const login = (req, res) => {
    res.render("member/login", {memberList})
    //app에서 views의 경로를 .src/views로만 설정했기 때문에 
    //해당 위치는 member 폴더 내임을 표시해야 함

}

const login_check = (req, res) => {
    
    const memberId = req.query.id;
    const memberPwd = req.query.pwd;
    // console.log("id : ", memberId)
    // console.log("pwd : ", memberPwd)
    
    

    // for (let i = 0 ; i < memberList.length ; i++){
        
    // }
}

module.exports = {login, login_check}