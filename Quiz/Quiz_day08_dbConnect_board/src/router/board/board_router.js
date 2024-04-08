const router = require("express").Router();
const ctrl = require("../../controller/board/board_ctrl")

router.get("/list", ctrl.board_views.list)

module.exports = router