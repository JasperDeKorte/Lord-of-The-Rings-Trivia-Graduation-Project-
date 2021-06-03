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


function clickMe() {
    console.log("Clicked!")

}
export default function StartMenu() {


    return (
        <Router>
            <div className="startMenuDiv">

                <div className="">
                    <NavLink to="/InputPage" activeClassName="mainButtonStylingIndex">
                        <button className="mainButtonStyling">New Game</button>
                    </NavLink>

                    <Switch>
                        <Route path="/InputPage">
                            <Inputpage />
                        </Route>
                    </Switch>
                </div>


                <div>
                    <Link to="/OptionsPage">
                        <button className="mainButtonStyling">Options</button>
                    </Link>
                    <Switch>
                        <Route path="/OptionsPage">
                            <OptionsPage />
                        </Route>

                    </Switch>
                </div>


            </div>
        </Router>
    )
}