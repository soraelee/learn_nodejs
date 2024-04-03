module.exports = (app) => {
    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter)
    
    const router = require("express").Router();

    router.get("/", (req, res) => {
        const sessionValue = {uId: req.session.uId, uPwd: req.session.uPwd}
        res.render("index", {sessionValue})
    })
    return router;
}
