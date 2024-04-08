const service = require("../service/page_service")

const views = {
    index : (req, res) => {
        res.render("index")
    },
    list : async (req, res) => {
        console.log("req.query.start", req.query.start)
        const totalContent = await service.pageRead.totalContent();

        const data = await service.pageRead.list(req.query.start, totalContent);

        console.log("data.list", data.list)
        //아래의 list 대신 사용 -- 페이지 수를 확인하기 위함

        // const list = await service.pageRead.list();
        //비동기적인 데이터 베이스를 동기화하여 가져옴
        res.render("list", {list : data.list, 
                            page : data.page, 
                            start : data.start, 
                            totalContent})
    },
    writeForm : (req, res) => {
        res.render("write_form")
    },
    content : async (req, res) => {
        const data = await service.pageRead.content(req.params.num);
        res.render("content", {data})
    }
}

const process = {
    write : async (req, res)=> {
        const msg = await service.pageInsert.write(req.body)
        res.redirect("/page/list")
    }
}
module.exports = {views, process};