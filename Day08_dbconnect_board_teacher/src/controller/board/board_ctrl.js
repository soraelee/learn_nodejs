const service = require("../../service/board/board_service")
const common = require("../../service/ser_common")

const board_views = {
    list : async (req, res) => {
        const list = await service.boardRead.list();
        res.render("board/list", {list})
    },
    writeForm : (req, res) => {
        const session = req.session;
        const msg = common.sessionCheck(session)
        if (msg !== 0 ) {
            return res.send(msg);
        }
        res.render("board/write_form", {username : session.username})
        //username : 글 작성 시 글작성자 표현
    }
}
const board_process = {
    write : async (req, res) => {
        const msg = await service.boardInsert.write(
            req.body, req.file, req.fileValidation
        );
        res.send(msg);
    }
}
module.exports = {board_views, board_process}