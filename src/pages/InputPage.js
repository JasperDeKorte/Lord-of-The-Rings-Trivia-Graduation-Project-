import React from 'react'
import { use} from "react-hook-form";
import App from "../App";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function InputPage() {
    const [playerInput, setPlayerInput] = React.useState("")

    return (
        <div>
            <label>Voer hier speler naam in</label>
            <input onChange={(event) => setPlayerInput(event.target.value)}/>


            <Link to="./App">Back</Link>
            <Switch>
                <Route path="/App"></Route>
            </Switch>

        </div>
    )
}

