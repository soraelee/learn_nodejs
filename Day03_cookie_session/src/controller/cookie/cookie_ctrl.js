// const cookieConfig = {
//     httpOnly : true,  //웹통신 할 때 적용하겠다
//     maxAge : 10000,  // 5초 동안유지하겠음
//     signed : true, //쿠키 value 값을 암호화 처리
// }
const config = require("../../../config/cookie_session/config")
const cookieConfig = config.cookieConfig

const index = (req, res) => {
    const userCookie = req.cookies.myCookie;
    res.cookie("myCookie", "valueCookie", cookieConfig)
    res.render("cookie/cookie01", {userCookie})
}
const popup = (req, res) => {
    res.render("cookie/popup")
}
const cookie02 = (req, res) => {
    const userCookie = req.cookies.myCookie;
    res.render("cookie/cookie02", {userCookie})
}
const popup02 = (req, res) => {
    res.render("cookie/popup02")
}
const makeCookie = (req, res) => {
    //쿠키를 만들어줌
    res.cookie("myCookie", "value", cookieConfig) // value : 암호화 처리 가능
    // res.render("cookie/popup02")
    res.send("<script> window.close()</script>")
    
}
const ser = require("../../service/cookie/cookie_service")

const cart = (req, res) => {
    res.render("cookie/cart", {list : ser.cart()})
}

const save = (req, res) => {
    const goods_id = req.params.goods; // /뒤에 오는 ㄴ데이터는 params로 받음
    
    let cart_list = req.cookies.cart_list;

    //사용자로부터 쿠키값을 얻어와서 사용
    if(cart_list === undefined) {
        // cart_list = {}//상품에 대한 상세 내용들을 전달
        cart_list = []
    }

    cart_list = ser.save(cart_list, goods_id)

    res.cookie("cart_list", cart_list, cookieConfig) 
    // 카트에 담으면 cart_list라는 이름에 값을 넣음
    
    const msg = `<script>
    alert("${goods_id} 상품이 장바구니에 등록 되었음!");
    location.href="/cookie/cart";
    </script>`;
    
    res.send(msg)
}
const viewList = (req, res) => {
    let cart_list = req.cookies.cart_list;
    console.log("cartList: ", cart_list) 
    if(!cart_list){ //cart_list === undefined
        const msg = `<script>
            alert("저장된 목록이 없습니다);
            location.href = "/cookie/cart"
            </script>`;
        res.send(msg)
    }
        let num = 0;
        cart_list.forEach((d) => {
            num += d.total;
        })
    

    res.render("cookie/view_list", {list:cart_list, num})
}



module.exports = {index, popup, cookie02, popup02, makeCookie, cart, save, viewList}