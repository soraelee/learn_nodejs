const cookieConfig = {
    httpOnly : true,  //웹통신 할 때 적용하겠다
    // maxAge : 5000,  // 5초 동안유지하겠음
    // signed : true, //쿠키 value 값을 암호화 처리
}

// const sessionConfig = {
//     secret : "암호화 키",
//     resave : false, //값이 변경되건 변경되지 않건 세션 새로 생성 -> false : 변경 될때만 세션 새로 생성
//     saveUninitialized : true //내용이 수정될 떄마다 저장하겠다
// }

module.exports = {cookieConfig} //, sessionConfig