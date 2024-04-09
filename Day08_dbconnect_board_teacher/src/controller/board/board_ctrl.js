const service = require("../../service/board/board_service")
const common = require("../../service/ser_common")

const board_views = {
    list : async (req, res) => {
        // const list = await service.boardRead.list();
        const data = await service.boardRead.list(req.query.start)
        res.render("board/list", {list : data.list, 
                                    start : data.start, 
                                    totalPage : data.totalPage})
    },
    writeForm : (req, res) => {
        const session = req.session;
        const msg = common.sessionCheck(session)
        if (msg !== 0 ) {
            return res.send(msg);
        }
        res.render("board/write_form", {username : session.username})
        //username : 글 작성 시 글작성자 표현
    },
    data : async(req, res) => {

        const data = await service.boardRead.data(req.params.num)
        const username = req.session.username; 
        //세션을 활용해 로그인한 사용자와 작성자의 일치여부 판단을 위함
        res.render("board/data", {data, username})
    }, 
    modifyForm : async (req, res) => {
        const data = await service.boardRead.data(req.params.writeNo)
        res.render("board/modify_form", {data})
    }
}
const fs = require("fs");
const file_process = {
    delete : (imgName) => {
        if(imgName !== 'nan'){
            try{
                fs.unlinkSync(`./upload_file/${imgName}`);
            } catch (err) {
                console.log(err)
            }

        }
    },
    download : (req, res) => {
        const filepath = `./upload_file/${req.params.imgName}`;
        res.download(filepath)
    }
}
const board_process = {
    file_process: file_process,
    write : async (req, res) => {
        const msg = await service.boardInsert.write(
            req.body, req.file, req.fileValidation
        );
        res.send(msg);
    },
    delete : (req, res) => {
        //데이터베이스 삭제 성공 시 file 삭제
        board_process.file_process.delete(req.params.imgName);
        service.boardUpdate.delete(req.params.writeNo);
        res.redirect("/board/list")
    },
    modify : async (req, res) => {
        const deleteFile = req.body.change_file_name;
        const message = await service.boardUpdate.modify(req.body, req.file);
        //사용자가 넘겨준 파일 내용을 전달하여 값이 수정되도록 함
        if (req.file !== undefined && message.result === 1){
            file_process.delete(deleteFile);
        }
        res.send(message.msg)
    },
}


module.exports = {board_views, board_process, file_process}