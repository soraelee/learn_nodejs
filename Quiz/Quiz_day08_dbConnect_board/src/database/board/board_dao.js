const con = require("../common_dao")

const boardRead = {
    list : async (req, res) => {
        const sql = "select * from board";
        const result = 0;
        try{
            result = (await con).execute(sql);
        } catch (err) {
            console.log(err)
        }
        console.log("result : ", result)
        return result;
    }
}

module.exports = {boardRead}
