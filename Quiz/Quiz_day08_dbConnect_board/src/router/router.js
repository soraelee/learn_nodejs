module.exports = (app) => {
    const memberRouter = require("./member/member_router");
    const boardRouter = require("./board/board_router");
    app.use("/member", memberRouter)
    app.use("/board", boardRouter)
    
    const router = require("express").Router();

    router.get("/", (req, res) => {
        if(req.session.uId){
            res.cookie("isLogin", true); //script를 사용하기 위해 해당 쿠키값이 있는 지 없는 지 설정
        }

        res.render("index")
    })
    return router;
}
