import {inventory} from "../constants/inventory.js";

function purchased(){
    let purchasedTv = 0;
    for (let i = 0; i < inventory.length ; i ++){
        purchasedTv = purchasedTv + inventory[i].originalStock
    }
    return purchasedTv;
}

export default purchased;