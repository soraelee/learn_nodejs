const memberDAO = require("../../database/member/member_dao")

const bcrypt = require("bcrypt");
const getAllMember = async () => {
    const result = await memberDAO.getAllMember();

    return result.rows;
}
const getMessage = (msg, url) => {
    return `<script>
            alert("${msg}");
            location.href="${url}";
            </script>`
}
const loginChk = async (uid, upwd) => {
    const result = await memberDAO.getAllMember();
    const memList = result.rows;

    console.log("uid" , uid)
    console.log("upwd" , upwd)
    
    let msg="", url=""
    
    for (let i = 0; i < memList.length ; i++) {
        if (memList[i].ID === uid && memList[i].PWD === upwd ){
            msg = memList[i].NAME + "님 환영합니다!"
            url = "/"

            return getMessage(msg, url)
        }
    }
    for (let i = 0; i < memList.length ; i++) {
        if(memList[i].ID === uid && memList[i].PWD !== upwd){
            msg = "비밀번호가 틀렸습니다"
            url = "/member/login"

            return getMessage(msg, url)
        }

    }
    // console.log("333333333: ", memList[i])
        msg = "존재하지 않는 아이디 입니다"
        url = "/member/login"
        return getMessage(msg, url);
}
const insert = (value) => {
    let result = memberDAO.insert(value)
    let msg = "", url = "";

    if(result === 0){
        msg="이미 존재하는 ID 입니다"
        url="/member/register_form"
    }else {
        msg="회원가입이 완료되었습니다"
        url="/"
    }

    return getMessage(msg, url) 
}
const memberInfo = async (uId) => {
    const member = await memberDAO.searchMember(uId)
    return member.rows
}
const modifyMember = async (value) => {
    const result = await memberDAO.modifyMember(value)
    let msg="", url=""
    if (result == 0) {
        msg = "문제 발생"
        url = `/member/modify_form/${value.ID}`
    }else {
        msg = "수정이 완료되었습니다."
        url = `/member/info/${value.ID}`
    }

    return getMessage(msg, url);
}
const deleteMember = async (uId) => {
    const result = await memberDAO.deleteMember(uId)
    let msg = '', url=''
    if(result == 0) {
        msg = "문제 발생"
        url = `/member/info/${uId}`
    } else {
        msg = "삭제 되었습니다"
        url = `/member/list`
    }

    return getMessage(msg, url)
}

module.exports = {getAllMember, loginChk, getMessage, insert, memberInfo, modifyMember, deleteMember}