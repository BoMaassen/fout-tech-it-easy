import './App.css';
import alreadySold from "./helpers/alreadySold.js";
import purchased from "./helpers/purchased.js";

function App() {
    return (
        <>
            <h1>Tech it easy dashboard</h1>

            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="sold-tv">
                    <p>Aantal verkochte producten</p>
                    <p>{alreadySold()}</p>
                </div>
                <div className="purchased-tv">
                    <p>Aantal ingekochte producten</p>
                    <p>{purchased()}</p>
                </div>
            </section>
        </>
    )
}

export default App
