const sessionCheck = (session) => {
    if ( !session || !session.username) { // undefine일 때 해당 값을 넣어주세요
        msg = "로그인 사용자만 접근 가능!!"
        url = "/member/login";
        return getMessage(msg, url)
    }
    return 0;
}

const getMessage = (msg, url) => {
    return `<script>
            alert('${msg}')
            location.href="${url}"
            </script>`
}

const timeModify = (list) => {
    //모든 게시물 리스트를 받아 모든 게시물의 날짜 부분을 변경
    list = list.map((data) => {
        data.SAVE_DATE = data.SAVE_DATE.toLocaleString();
        return data;
    })
    return list
}
module.exports = {sessionCheck, getMessage, timeModify}