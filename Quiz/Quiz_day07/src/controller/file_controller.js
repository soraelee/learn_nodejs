const view = {
    index : (req, res) => {
        res.render("file_index")

    }
}
const process = {
    upload : (req, res) => {
        //전송된 파일 정보들이 보여짐
        console.log("req.body ",req.body)
        console.log("req.file ",req.file)
        let msg =`<script>
                alert("업로드 중..")
                location.href="/file/file_list"
                </script>`

        res.send(msg)
    }
}

module.exports = {view, process}