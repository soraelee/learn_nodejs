const express = require("express")
const ctrl = require("../../controller/member/member_controller")

const router = express.Router();

router.get("/login", ctrl.login)
router.get("/login_check", ctrl.login_check)

module.exports = router;