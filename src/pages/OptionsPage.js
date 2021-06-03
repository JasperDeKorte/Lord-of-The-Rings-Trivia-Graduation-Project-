import React from 'react'
import App from "../App";
import StartMenu from "./StartMenu"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function OptionsPage() {


    return (
        <div>
            <p>Hier komen de opties</p>



            <Link to="./pages/StartMenu">
                <button>Back</button>
            </Link>
            <Switch>
                <Route path="/App"></Route>
            </Switch>
        </div>
    )
}

