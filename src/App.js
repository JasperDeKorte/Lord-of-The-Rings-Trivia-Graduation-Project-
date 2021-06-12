import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import StartMenu from "./pages/StartMenu"
import Inputpage from "./pages/InputPage";
import OptionsPage from "./pages/OptionsPage";
import Quiz from "./pages/Quiz"

import Highscore from "./pages/HighscorePage";


export default function App() {

    return (


        <div className="startMenuDiv">
            <div className="backgroundcss">
                <h1></h1>
            </div>



            <Router>
                        <Switch>
                            <Route exact path="/">
                                <StartMenu />
                            </Route>

                            <Route path="/Quiz">
                                <Quiz />
                            </Route>

                            <Route path="/Highscore">
                                <Highscore />
                            </Route>

                            <Route path="/InputPage">
                                <Inputpage/>
                            </Route>

                            <Route path="/OptionsPage">
                                <OptionsPage/>
                            </Route>


                        </Switch>
            </Router>

        </div>
    );
}

