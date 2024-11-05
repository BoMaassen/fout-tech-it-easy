import './App.css';
import alreadySold from "./helpers/alreadySold.js";

function App() {
    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <p>Aantal verkochte producten</p>
            <p>{alreadySold()}</p>
        </>
    )
}

export default App
