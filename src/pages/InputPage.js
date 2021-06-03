import React from 'react'
import App from "../App";
import StartMenu from "./StartMenu"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function InputPage() {
    const [name, setName] = React.useState("")

    return (
        <div>
            <label>Voer hier speler naam in</label>
            <div><input className="mainInputStyling" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <button onClick={() => console.log("playername is set!:", name)}>Playerset</button>

            <p>{name}</p>

            <Link to="/StartMenu">
                <button id="backInputPage" className="mainButtonStyling">Back</button>
            </Link>
            <Switch>
                <Route path="/App"></Route>
            </Switch>



        </div>
    )
}

