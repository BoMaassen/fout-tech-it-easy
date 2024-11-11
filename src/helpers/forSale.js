import purchased from "./purchased.js";
import alreadySold from "./alreadySold.js";

function forSale(){
    return purchased() - alreadySold()
}

export default forSale;