import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InputPage from "./pages/InputPage";

export default function App() {
    return (
        <Router>
            <div>
                <Link className="linkTestEdit" to="/InputPage">New Game</Link>

                <button onClick={() =>
                    <Switch>
                        <Route path="/InputPage">
                            <InputPage />
                        </Route>

                    </Switch>
                }>
                    New Game
                </button>

                <Switch>
                    <Route path="/InputPage">
                        <InputPage />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

