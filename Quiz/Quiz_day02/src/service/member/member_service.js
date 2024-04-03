const memberList = require("../../database/member/memberDAO")

const getMember = (id) => {
    const memberId = memberList.filter((data) => data.id === id);
    console.log(memberId) // 배열 형태
    console.log(memberId[0]) //배열을 풀어서 딕셔너리로 내보냄
    return memberId[0] //이거 뭐지???????
}

module.exports = {getMember};