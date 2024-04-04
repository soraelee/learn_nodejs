module.exports = (app) => {
    const memberRouter = require("./member/member_router");
    app.use("/member", memberRouter)
    
    const router = require("express").Router();

    router.get("/", (req, res) => {
        const isLogin = req.cookies.isLogin;
        res.render("index", {isLogin})
    })
    return router;
}
