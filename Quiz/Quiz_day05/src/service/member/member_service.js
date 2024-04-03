const memberDAO = require("../../database/member/member_dao")

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
        if (memList[i].ID === uid && memList[i].PWD === upwd){
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


module.exports = {getAllMember, loginChk, getMessage}