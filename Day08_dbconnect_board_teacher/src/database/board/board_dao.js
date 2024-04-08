const con = require("../common_dao")

const boardRead = {
    list : async () => {
        const sql = "select * from board"
        console.log("con : ", con)
        const list = (await con).execute(sql)
        //비동기로 동작하는 것을 기다려야 다음 동작 수행 가능
        return list
    }
}

const boardInsert = {
    write : async (body) => {
        const sql = `insert into board(write_no, id, title, content, 
            origin_file_name, change_file_name) values(board_seq.nextval, 
                :id, :title, :content, :origin_file_name, :change_file_name)`
    const result = (await con).execute(sql, body);
    console.log("result : ", result);
    return result
    }
}
module.exports = {boardRead, boardInsert}