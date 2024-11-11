import './App.css';
import alreadySold from "./helpers/alreadySold.js";
import purchased from "./helpers/purchased.js";
import forSale from "./helpers/forSale.js";

function App() {
    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="sold-tv stats-blok">
                    <p>Aantal verkochte producten</p>
                    <p>{alreadySold()}</p>
                </div>
                <div className="purchased-tv stats-blok">
                    <p>Aantal ingekochte producten</p>
                    <p>{purchased()}</p>
                </div>
                <div className="for-sale-tv stats-blok">
                    <p>Aantal te verkopen producten</p>
                    <p>{forSale()}</p>
                </div>
            </section>
        </>
    )
}

export default App
