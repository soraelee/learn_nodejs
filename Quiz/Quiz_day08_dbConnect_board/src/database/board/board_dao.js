const con = require("../common_dao")

const boardRead = {
    list : async () => {
        const sql = "select * from board";
        const result = (await con).execute(sql);
        return result;
    }
}

module.exports = {boardRead}
