const router = require("express").Router();
const multer = require("multer") //파일에 대한 정보를 가져옴
// const upload = multer({dest : "upload_file"}) //dest : 목적지 -- 어디에 저장할 지(폴더 지정)
//storage 설정
const stg = multer.diskStorage({
    destination : (req, file, cb)=> {
        console.log("req : ", req.body);
        console.log("file : ", file);
        console.log("cb : ", cb);
        cb(null, "upload_file")
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname) //원본 데이터의 이름
    }
})
const f_filter = (req, file, cb) => {
    console.log("f_filter file : ", file.mimetype.split("/"))
    const type = file.mimetype.split("/");
    // if(type[1] == "jpg" || type[1] == "jpeg"|| type[1] == "png")
    if(type[0] == "image"){
        cb(null, true) //맞으면 저장
        console.log("cb true : ",cb)
    }else {
        req.fileValidation = "이미지만 저장하세요"
        cb(null, false) //아니면 저장하지 않음
        console.log("cb false : ",cb)
    }
}

const upload = multer({storage : stg, fileFilter : f_filter})
const fileCtrl = require("../controller/file_controller")

router.get("/", fileCtrl.view.index)
router.post("/upload", upload.single("file_name"), fileCtrl.process.upload) 
//file_name => html에 작성한 내용과 동일하게 맞춰줌
//넘어오기 전에 설정
router.get("/list", fileCtrl.view.list)
router.get("/download/:fileName", fileCtrl.view.download)
router.get("/deleteFile/:fileName", fileCtrl.process.deleteFile)
router.get("/modify_form/:fileName", fileCtrl.view.modifyForm)
router.post("/modify", upload.single("newFileName"), fileCtrl.process.modify)


module.exports = router;