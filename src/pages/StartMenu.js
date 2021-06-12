import React from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";

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