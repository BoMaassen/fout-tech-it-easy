import {inventory} from "../constants/inventory.js";

function alreadySold(){
    let soldTv = 0;
    for (let i = 0; i < inventory.length ; i ++){
        soldTv = soldTv + inventory[i].sold
    }
    /*nog van opdracht 1a*/
   /*return console.log(soldTv);*/
    return soldTv;
}

export default alreadySold;