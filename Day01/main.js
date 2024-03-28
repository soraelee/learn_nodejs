//자바스크립트의 문법을 거의 그대로 활용함
const http = require('http'); //통신을 위해 http 기능을 가져옴 
// require()
//nodejs에서만 사용가능
// import와 같음
const fs = require("fs"); //파일의 기능을 사용하게 함

const app = http.createServer((request, response)=> {
    //서버를 만들겠습니다. 
    //createServer(request, response)
    // request : 사용자의 정보를 갖고 요청하는 내용
    // response : 서버에서 요청에 따른 정보를 전달함으로서 응답
    console.log("연결 성공!!!");

    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'}) //통신 받을 때 사용자에게 전달하는 내용
    //성공적인 연결은 200

    //경로 설정하기- if문사용
    //모든 경로를 다 작성할 수 없으므로 '라우팅'이라는 기능을 사용 
    //라우팅 : 파일을 연결 연결 하는 다리를 생성 - express라는 모듈을 사용
    //npm install express --save
    //uninstall 시 npm uninstall express --save
    if(request.url === "/") {// /는 포트 번호 다음의 내용
        response.end(`<h1>기본페이지 연결<h1>
        <a href="/test">test 이동</a>`)
    }else if(request.url === "/test"){
        fs.readFile("./test.html", (err, data)=> {
            response.end(data); 
        }) ; // 파일을 연결
        
        //err : 문제에 대한 내용을 받음
        //data : 파일에 대한 코드 (내용을 받음)
        //해당 내용들을 사용자한테 response
        // response.end("test 페이지 연결")
    }else{
        response.end("연결 성공 되었습니다!121212")
    }
     
}); 
app.listen(3600); //포트번호 - 3600 // ip로 구동 (포트번호, "ip"), "192.168.42.94"
//listen : 연결 대기하겠습니다.

//Terminal : cmd 창


