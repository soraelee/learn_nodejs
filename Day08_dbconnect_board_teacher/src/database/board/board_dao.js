const con = require("../common_dao")

const boardRead = {
    list : async (start, end) => {
        // const sql = "select * from board"
        const sql = `select * from (select rownum rn, A.* from 
            (select * from board order by write_no desc)A)
            where rn between ${start} and ${end}`;
        console.log("con : ", con)
        const list = (await con).execute(sql)
        //비동기로 동작하는 것을 기다려야 다음 동작 수행 가능
        return list
    },
    totalContent : async () => {
        const sql = "select count(*) from board";
        const totalContent = await (await con).execute( sql );
        return  totalContent.rows[0]['COUNT(*)'];
    },      

    data : async (num) => {
        const sql = `select * from board where write_no='${num}'`;
        const data = (await con).execute(sql);
        //연산 시에는 모든 promise 값을 풀어줘야 함
        return data;
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

const boardUpdate = {
    upHit: async (num) => {
        const sql = `update board set hit=hit+1 where write_no='${num}'`;
        (await con).execute(sql); // Assuming "con" is your database connection object
    },
    delete : async (writeNo) => {
        const sql = `delete from board where write_no=${writeNo}`;
        (await con).execute(sql);
    },
    modify : async ( body )=>{
        const sql = `update board set title=:title, content=:content, 
            origin_file_name=:origin_file_name, 
            change_file_name=:change_file_name where write_no=:write_no`;
        let result = 0;
        try {
            result = (await con).execute( sql, body );
        } catch (error) {
            console.log(error)
        }
        return result
    }

}
module.exports = {boardRead, boardInsert, boardUpdate}