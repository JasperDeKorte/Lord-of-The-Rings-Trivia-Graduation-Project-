import React, {createContext, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

import StartMenu from "./pages/startMenu/StartMenu"
import Inputpage from "./pages/inputPage/InputPage";
import OptionsPage from "./pages/optionsPage/OptionsPage";
import Quiz from "./pages/quiz/Quiz"
import Highscore from "./pages/highscorePage/HighscorePage";
import soundON from "./assets/soundON.png";

export const NameAvatarContext = createContext();
export const SoundContext = createContext();
export const GlobalStateContext = createContext();


export default function App() {
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [sound, setSound] = useState(true)
    const [score, setScore] = useState(0)
    const [soundIcon, setSoundIcon] = useState(soundON)
    const [saveEdit, setSaveEdit] = useState(0)


    return (

        <div className="Root">
            <div className="startMenuDiv">
                <Router>
                    <GlobalStateContext.Provider value={{score, setScore, saveEdit, setSaveEdit}}>
                        <SoundContext.Provider value={{sound, setSound, soundIcon, setSoundIcon}}>
                            <NameAvatarContext.Provider value={{name, setName, avatar, setAvatar}}>
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


                                    </Switch>
                                </AnimatePresence>
                            </NameAvatarContext.Provider>
                        </SoundContext.Provider>
                    </GlobalStateContext.Provider>
                </Router>
            </div>
        </div>
    )
        ;
}

