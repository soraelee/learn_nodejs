const service = require("../../service/board/board_service")

const board_views = {
    list : async (req, res) => {
        const list = await service.boardRead.list();
        console.log("list", list)
        res.render("board/list", {list})
    }

}

module.exports = {board_views}