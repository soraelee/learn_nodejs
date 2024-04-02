const express = require("express")
const ctrl = require("../../controller/session/session_ctrl")

const router = express.Router();

router.get("/", ctrl.index);
router.get("/set_session", ctrl.setSession);
router.get("/get_session", ctrl.getSesseion);
router.get("/del_session", ctrl.delSesseion);

router.get("/login", ctrl.login)
router.post("/login_check", ctrl.loginCheck)
router.get("/success", ctrl.success)
router.get("/logout", ctrl.logout)

module.exports = router