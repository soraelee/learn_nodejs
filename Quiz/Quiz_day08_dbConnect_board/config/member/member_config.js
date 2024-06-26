
const sessionConfig = {
    secret : "암호화 키",
    resave : false, 
    //true : 값이 변경되건 변경되지 않건 세션 새로 생성 / false : 변경 될때만 세션 새로 생성
    saveUninitialized : true, //내용이 수정될 때마다 저장하겠다
    // cookie :{maxAge : 5000} // 세션이 5초간 유지하도록 설정함
}
const cookieConfig = {
    httpOnly : true,  //웹통신 할 때 적용하겠다
}

module.exports = {sessionConfig, cookieConfig}