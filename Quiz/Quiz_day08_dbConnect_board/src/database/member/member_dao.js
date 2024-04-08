const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/dbConfig");

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
    let sql = `update members set name = '${value.NAME}', pwd = '${value.PWD}', addr = '${value.ADDR}' where id='${value.ID}'`
    let result = 0;
    try{
        result = await con.execute(sql);
    } catch(err){
        console.log(err)
    }

    return result.rowsAffected;
}
const deleteMember = async(uId) => {
    let con = await oracledb.getConnection(dbConfig)
    let sql = `delete from members where id='${uId}'`
    let result = 0;
    try{
        result = await con.execute(sql)
    } catch (err) {
        console.log(err)
    }
    return result
}

module.exports = {getAllMember, insert, searchMember, modifyMember, deleteMember}