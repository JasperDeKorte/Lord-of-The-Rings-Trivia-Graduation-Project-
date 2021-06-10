import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import Inputpage from "./InputPage"
import OptionsPage from "./OptionsPage";
import logo from '../assets/LOTR.jpg'


function clickMe() {
    console.log("Clicked!")

}

export default function StartMenu() {


    return (
        <>


            <NavLink to="/InputPage">
                <button className="mainButtonStyling">New Game</button>
            </NavLink>

            <Link to="/OptionsPage">
                <button className="mainButtonStyling">Options</button>
            </Link>

            <Link to="/Highscore">
                <button className="mainButtonStyling">Highscore</button>
            </Link>

        </>
    )
}