const dao = require("../../database/board/board_dao")

const boardRead = {
    list : async () => {
        const list = await dao.boardRead.list();
        console.log("list : ", list)
        return list.rows
    }
}

module.exports = {boardRead}