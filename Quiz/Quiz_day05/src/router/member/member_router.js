const router = require("express").Router();
const ctrl = require("../../controller/member/member_ctrl")

router.get("/login", ctrl.login)
router.post("/login_check", ctrl.login_check)
router.get("/logout", ctrl.logout)

module.exports = router