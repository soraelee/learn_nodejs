const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")

oracledb.autoCommit = true
//데이터를 추가 삭제할 경우 알아서 commit 해주세요
oracledb.outFormat = oracledb.OBJECT; 
//데이터를 얻어온 후 포멧 => 2차원 배열 형식으로 들어옴
//설정 후 => 배열 내 key value 형식으로 받음

const getList = async () => { //호출하는 곳에서도 똑같이 async 처리 해야 함
    //오라클 데이터베이스 연결
    let con = await oracledb.getConnection(dbConfig);
    // console.log("con : ", con) //con :  Promise { <pending> }
    //비동기 형식 -> 연결이 계속 되지 않음 -> async, await 설정

    let result = await con.execute("select * from members"); //비동기 형식
    // let result = con.execute("select * from members");
    // result.then(res => console.log("res : ", res))
    // console.log("dao result", result); 
    return result
}
const insert = async (body) => {
    let con = await oracledb.getConnection(dbConfig);
    const sql = `insert into members(id, pwd, name, addr)
    values(:id, :pwd, :name, :addr)`;
    let result = 0
    try{
        result = await con.execute(sql, body);

    }catch(err){
        console.log(err)
    }
    console.log("result : ", result)
    return result
}
const getMember = async (mId) => {
    console.log("dao id : ", mId);
    const con = await oracledb.getConnection(dbConfig);
    const sql = `select * from members where id=:id`; //이름 똑같이 써야 함
    let member;
    try{
        member = await con.execute(sql, mId);
    }catch(err){
        console.log(err)
    }
    console.log("member : ", member)
    return member;
}
const deleteM = async (body) => {
    const con = await oracledb.getConnection(dbConfig);
    const sql = `delete from members where id=:id`;
    let result=0;
    try{
        result = await con.execute(sql, body)
    }catch(err){
        console.log(err)
    }
    return result;
}
const modify = async (body) => {
    let con = await oracledb.getConnection(dbConfig)
    const sql = `update members set pwd='${body.pwd}', name='${body.name}' where id = '${body.id}'`;
    let result = 0;
    try {
        result = await con.execute(sql)
    }catch (err){
        console.log(err)
    }
    return result
}
module.exports = { getList , insert, getMember, deleteM, modify}