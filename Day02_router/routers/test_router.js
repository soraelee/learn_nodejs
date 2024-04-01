//라우터에 대한 기능들만 모음
const express = require("express");
const ctrl = require("../controller/test_controller")

const router = express.Router();

/*router.get("/", (req, res) => {
    res.send("router 분할")
})*/

router.get("/", ctrl.index) 
//컨트롤러에서 내보낸 값은 index라는 함수 이므로 
//ctrl을 가져오면 index 함수를 가져온 것으로 됨
router.get("/test1", ctrl.test1) 
router.get("/test2", ctrl.t2) 

//
router.get("/info", ctrl.info)


module.exports = router; //router 내보내기