import {inventory} from "../constants/inventory.js";

function alreadySold(){
    let soldTv = 0;
    for (let i = 0; i < inventory.length ; i ++){
        soldTv = soldTv + inventory[i].sold
    }
   return console.log(soldTv);
}

export default alreadySold;