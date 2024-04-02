const db = require("../../db/user_cart")

const cart = () => {
    console.log();
    return db;
}

const save = (cart_list, id) => {
    //데이터 베이스 연동 시
    //select * from goods where goods_id = id;

    //예시를 들기 위해 아래와 같이 구현
    for (let i = 0 ; i < db.length; i++){
        if(db[i].goods_id == id){
            // cart_list = db[i]
            if (cart_list.length == 0){
                cart_list.push(db[i])
                cart_list[0]['number'] = 1
                cart_list[0]['total'] = db[i].price
                break;
            }else{
                let bool = true;
                for (let j = 0; j < cart_list.length ; j++){
                    
                    if (cart_list[j].goods_id == id){
                        cart_list[j]['number'] += 1
                        cart_list[j]['total'] *= cart_list[j].number
                        bool = false;
                        break;
                    }
                }
                    if (bool){ //false이면 실행 x
                        cart_list.push(db[i])
                        cart_list[cart_list.length -1]['number'] = 1
                        cart_list[cart_list.length -1]['total'] = cart_list[cart_list.length -1].price
                        // cart_list.push(data)
                }

            }
            break;
        }
    }
    return cart_list
}


module.exports = {cart, save}