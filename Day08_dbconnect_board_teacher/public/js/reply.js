function reply_form(){
    $("#first").slideDown('slow'); 
    $("#modal_wrap").show();
}
function reply_hide(){
    $("#first").slideUp('fast'); 
    $("#modal_wrap").hide();
}
function rep(){
    console.log("답글 버튼 실행")
    let form={}; 
    let arr = $("#frm").serializeArray();
    arr.forEach( d => { form[d.name] = d.value; })
    //=> form이라는 object에 사용자 이름에 값을 넣음  
    fetch("/boardrep/register", {
        // 페이지 변경 없이 바로 바로 등록
        method : "post",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify( form )
    })
    .then(res => res.json() )
    .then( result => {
        if(result === 1)
            alert("답글이 달렸습니다!!")
        reply_hide();
    })
    let html = "아이디 : " + form["id"] + " /";
    html += "작성일 : " + new Date().toLocaleString()+"<br>"
    html += "제목 : " + form["title"]+"<br>"
    html += "내용 : " + form["content"]+"<hr>"
    const content = document.getElementById("content");
    content.insertAdjacentHTML("afterbegin", html)
}
