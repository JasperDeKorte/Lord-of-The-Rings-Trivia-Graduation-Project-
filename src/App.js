import React, {createContext, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import StartMenu from "./pages/StartMenu"
import Inputpage from "./pages/InputPage";
import OptionsPage from "./pages/OptionsPage";
import Quiz from "./pages/Quiz"
import Highscore from "./pages/HighscorePage";
import Firebase from "../src/firebaseTest"

import soundON from "./assets/soundON.png";
import soundOFF from "./assets/soundOFF.png";


export const nameAvatarContext = createContext()
export const soundContext = createContext()

export default function App() {
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [sound, setSound] = useState(true)
    const [soundIcon, setSoundIcon] = useState(soundON)

    return (

        <div className="Root">
            <div className="startMenuDiv">
                <Router>
                    <soundContext.Provider value={{sound, setSound, soundIcon, setSoundIcon}}>
                        <nameAvatarContext.Provider value={{name, setName, avatar, setAvatar}}>
                            <AnimatePresence exitBeforeEnter>
                                <Switch>
                                    <Route exact path="/">
                                        <StartMenu/>
                                    </Route>

                                    <Route path="/Quiz">
                                        <Quiz/>
                                    </Route>

                                    <Route path="/Highscore">
                                        <Highscore/>
                                    </Route>

                                    <Route path="/InputPage">
                                        <Inputpage/>
                                    </Route>

                                    <Route path="/OptionsPage">
                                        <OptionsPage/>
                                    </Route>

                                    <Route exact path="/Firebase">
                                        <Firebase />
                                    </Route>
                                </Switch>
                            </AnimatePresence>
                        </nameAvatarContext.Provider>
                    </soundContext.Provider>
                </Router>
            </div>
        </div>
    )
        ;
}

