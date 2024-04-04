const router = require("express").Router();
const ctrl = require("../../controller/member/member_ctrl")

router.get("/login", ctrl.login)
router.post("/login_check", ctrl.login_check)
router.get("/logout", ctrl.logout)
router.get("/list", ctrl.memberList)
router.get("/register_form", ctrl.registerForm)
router.post("/register", ctrl.register)
router.get("/info/:id", ctrl.info)
router.get("/modify_form/:id", ctrl.modifyForm)
router.post("/modify", ctrl.modify)
router.get("/delete/:id", ctrl.deleteM)

module.exports = router