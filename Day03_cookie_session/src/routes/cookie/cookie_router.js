const express = require("express")
const ctrl = require("../../controller/cookie/cookie_ctrl")
const router = express.Router();

router.get("/", ctrl.index);
router.get("/popup", ctrl.popup);
router.get("/cookie02", ctrl.cookie02);
router.get("/popup02", ctrl.popup02);
router.get("/makeCookie", ctrl.makeCookie);
router.get("/cart", ctrl.cart)
router.get("/save/:goods", ctrl.save) 
//save 뒤에 들어오는 값은 goods라는 변수에 저장
router.get("/view_list", ctrl.viewList) 

module.exports = router