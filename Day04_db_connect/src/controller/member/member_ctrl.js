const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")

const service = require("../../service/member/member_service")

oracledb.autoCommit = true
//데이터를 추가 삭제할 경우 알아서 commit 해주세요
oracledb.outFormat = oracledb.OBJECT; 
//데이터를 얻어온 후 포멧 => 2차원 배열 형식으로 들어옴
//설정 후 => 배열 내 key value 형식으로 받음

const list = async (req, res) => {

    const list = await service.getList();
    console.log("list : ", list);
    // res.send(list)
    res.render("member/member_index", {list})

    // //오라클 데이터베이스 연결
    // let con = await oracledb.getConnection(dbConfig);
    // console.log("con : ", con) //con :  Promise { <pending> }
    // //비동기 형식 -> 연결이 계속 되지 않음 -> async, await 설정

    // let result = await con.execute("select * from members"); //비동기 형식
    // // let result = con.execute("select * from members");
    // // result.then(res => console.log("res : ", res))
    // console.log("result", result); 
    // res.send("list")
}

const registerForm = (req, res) => {
    res.render("member/register_form")
}
const register = async (req, res) => {
    let msg = await service.insert(req.body);
    res.send(msg)
}
const memberView01 = async (req, res) => {
        console.log("=== view01 ===")
        console.log("req.params ", req.params)
        console.log("req.query ", req.query)
        let member = await service.getMember(req.params);
        res.render("member/member_view", {member})
}
const memberView02 = (req, res) => {
    console.log("=== view02 ===")
    console.log("req.params ", req.params)
    console.log("req.query ", req.query)
}
const deleteM = async (req, res) => {
    let msg = await service.deleteM(req.params)
    res.send(msg)
}
const modifyForm = async (req, res) => {
    console.log("req.query => ", req.query)
    let member = await service.getMember(req.query);
    res.render("member/modify_form", {member})
}
const modify = async (req, res) => {
    let msg = await service.modify(req.body)
    res.send(msg)
}

module.exports = {modify, list, registerForm, register, memberView01, memberView02, deleteM, modifyForm}