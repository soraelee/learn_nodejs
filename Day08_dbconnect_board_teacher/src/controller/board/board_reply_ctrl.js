const ser = require("../../service/board/board_reply_service")
rep_process = {
    register : async (req, res) => {
        const result = await ser.repInsert.register(req.body)
        console.log("rep register", result)
        res.json(result);
    }
}
rep_views = {
    replyData : async (req, res) => {
        const result = await ser.repRead.replyData( req.params.groupNum );
        res.json(result)

    }
}
module.exports = {rep_process, rep_views}