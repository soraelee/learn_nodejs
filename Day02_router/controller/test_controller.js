const service = require("../service/test_service")

const index = (req, res) => {
    const member = service.index();
    // console.log("controller")
    // console.log(member)
    res.render("index", {member});
}
const test1 = (req, res) => {
    console.log("=====test1=====")
    console.log("req.query.id : ", req.query.id) //object 타입으로 받음
    console.log("req.query.pwd : ", req.query.pwd) 

    // let msg= `<script>
    // alert('성공');
    // location.href="/test2";
    // </script>` //사용자의 입력을 받음
    // res.send("<h1>test1</h1>"); //사용자의 입력을 받음
    // res.send(msg);

    // res.render("test1")

    if (req.query.id === 'aaa'){
        res.redirect("/")
    }else{
        let msg= `<script>
        alert('다시 입력하세요');
        location.href="/test2";
        </script>` //사용자의 입력을 받음
        res.send(msg);
        res.redirect("test2")
    }

    // res.redirect("/"); //submit을 누르면 지정한 페이지로 이동
    // => 서버 안에서 요청하는 것(서버 == vscode) - 서버에 대한 경로로 다시 요청
    //서버 자기자신으로 요청하는 것
}
const test2 = (req, res) => {
    res.render("test2");
}
const info = (req, res) => {
    //uid를 통해 사용자가 보낸 값을 받을 수 있음
    const mem = service.getMember(req.param("uId"))
     console.log("컨트롤러" , mem)
    // res.send('사용자 정보')
    res.render("info", {mem})
}


module.exports = {index: index, test1, t2:test2, info}; //index라는 함수를 내보냄 
//여러개를 내보낼 경우 {}로 묶음 //key와 value 값이 같으면 하나만 써도 됨

