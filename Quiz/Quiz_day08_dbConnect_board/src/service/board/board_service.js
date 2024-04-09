const dao = require("../../database/board/board_dao")
const common = require("../ser_common")

const boardRead = {
    list : async () => {
        const list = await dao.boardRead.list();
        data = common.timeModify(list.rows)
        return data
    }
}

module.exports = {boardRead}