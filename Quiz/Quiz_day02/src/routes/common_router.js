const express = require("express")
const ctrl = require("../controller/common_controller")
//express를 가져오는 이유 : Router 모듈이 express 라이브러리 안에 있기 때문

const router = express.Router();

router.get("/", ctrl.index)

module.exports = router;