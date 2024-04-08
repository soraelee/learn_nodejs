const dao = require("../database/pageDAO")

const pageRead = {
    list : async (start, totalC) => {
        start = (start && start > 1) ? Number(start) : 1 ;

        const page = pageOperation(start, totalC)
        //start에 값이 있거나 1보다 크다면 해당  페이지를 보여주고, 
        // 아닐 경우 첫 페이지를 보여줌

        // if (start == undefined){
        //     start
        // }else {
        //     Number(start) 
        // }
        // const list = await dao.daoRead.list();
        const list = await dao.daoRead.list(page.startNum, page.endNum);
        console.log("service : ", list)

        data = {}
        data.start = start;
        data.list = list.rows;
        data.page = page;

        return data;
    },
    content : async (num) => {
        pageUpdate.upHit(num);
        const data = await dao.daoRead.content(num);
        console.log("num", num)
        return data.rows[0]
    },
    totalContent : async () => {
        const totalContent = await dao.daoRead.totalContent();
        console.log(totalContent)
        return totalContent.rows[0]["COUNT(*)"]
    }
}
const pageInsert = {
    write : async (body) => {
        const result = await dao.daoInsert.write(body);
    }
}
const pageOperation = (start, totalContent) => {
    let page = {}
    const pageNum = 3; //페이지에서 몇개를 보여줄 것인지
    const num = (totalContent % pageNum == 0) ? 0 : 1; // 0 일 경우 0 아닐 경우 1
    page.totPage = parseInt(totalContent / pageNum) + num; //전체 페이지 수 

    page.startNum = (start - 1) * pageNum + 1 //시작 페이지 수 
    page.endNum = start * pageNum //종료 페이지 수 
    return page;
}



const pageUpdate= {
    upHit : (num) => {
        dao.daoUpdate.upHit(num)
    }
}
module.exports = {pageRead, pageInsert}