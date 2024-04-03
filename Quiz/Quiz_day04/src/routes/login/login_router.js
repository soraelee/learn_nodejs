const express = require("express")
const ctrl = require("../../controller/login/login_controller")
const router = express.Router();

router.get("/", ctrl.login)
router.post("/login_check", ctrl.loginChk)
router.get("/success", ctrl.success)
router.get("/logout", ctrl.logout)

module.exports = router;