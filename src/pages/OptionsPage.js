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



            <Link to="/">
                <button className="mainButtonStyling">Back</button>
            </Link>

        </div>
    )
}

