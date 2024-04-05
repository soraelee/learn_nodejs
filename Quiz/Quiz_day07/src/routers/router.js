module.exports = (app) => {
    const router = require("express").Router();
    const fileRouter = require("../routers/file_router")

    app.use("/file", fileRouter)
    
    router.get("/", (req, res) => {
        let msg =`<h3>기본 페이지 입니다</h3>
                  <a href="/file">file_index</a>`
        res.send(msg)
    })

    return router;
}