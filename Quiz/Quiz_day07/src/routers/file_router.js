const router = require("express").Router();
const ctrl = require("../controller/file_controller")
const multer = require("multer")
const stg = multer.diskStorage({
    destination : (req, file, cb) => {
        console.log("req : ", req.body)
        console.log("file : ", file)
        console.log("cb : ", cb)
        cb(null, "upload_file") //error 났을 떄 값, 이미지 저장경로 (in vscode)
    }, filename: (req, file, cb) => {
        console.log(cb)
        cb(null, Date.now() + "-" + file.originalname) //이미지 명칭을 설정하여 저장 =>> 해당 값이 저장 시 name(file_name)으로 설정 되어 활용할 수 있게 됨
    }
})
const upload = multer({storage : stg})

router.get("/", ctrl.view.index)
router.post("/upload", upload.single("file_name"), ctrl.process.upload)

module.exports = router