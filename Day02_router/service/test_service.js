const member = require("../db/memberDAO");
const index = () => {
    // console.log("service 연동???")
    // console.log(member)
    return member
}
const getMember = (id) =>{
    const mem = member.filter((data)=> data.id === id);
    // console.log("service member")
    // console.log(mem)
    return mem;
}
module.exports = { index : index , getMember}