const oracledb = require("oracledb")
const dbConfig = require("../../../config/member/member_config").dbConfig;

oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

const getAllMember = async () => {
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute("select * from members");
    return result;
}

// const loginChk = async (body) => {
//     let con = await oracledb.getConnection(dbConfig);
//     let sql = `select * from members where id='${body.id}', pwd='${body.pwd}'`
//     let result = await con.execute(sql, body)
//     return result;
// }

module.exports = {getAllMember}