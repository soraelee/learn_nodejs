const oracledb = require("oracledb")
const dbConfig = require("../../../config/member/member_config").dbConfig;

oracledb.autoCommit = true;
oracledb.outFormat = oracledb.OBJECT;

const getAllMember = async () => {
    let con = await oracledb.getConnection(dbConfig);
    let result = await con.execute("select * from members");
    return result;
}
const insert = async (value) => {
    let con = await oracledb.getConnection(dbConfig);
    let result = 0;
    result = await con.execute("insert into members(ID, PWD, NAME, ADDR)" + 
                                        "values(value.id, value.pwd, value.name, value.addr)");
    return result;
}
const searchMember = async (uId) => {
    let con = await oracledb.getConnection(dbConfig);
    let sql = `select * from members where id='${uId}'`
    let result = await con.execute(sql);
    return result;
}
const modifyMember = async (value) => {
    let con = await oracledb.getConnection(dbConfig);
    let sql = `update members set name = '${value.name}', pwd = '${value.pwd}', addr = '${value.addr}' where id='${value.id}'`
    let result = 0;
    try{
        result = await con.execute(sql);
    } catch(err){
        console.log(err)
    }
    console.log(result)
    return result;
}

module.exports = {getAllMember, insert, searchMember, modifyMember}