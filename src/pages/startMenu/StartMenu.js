import React, { useContext } from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";
import { motion } from 'framer-motion'
import { SoundContext } from "../../App";
import lotr_Logo from "../../assets/lotr_Logo.png"
import menuSword from "../../assets/menuSword.png"
import {sound1} from "../../helpers/Sounds";

export default function StartMenu() {
    const soundToggleMute = useContext(SoundContext)
    return (
        <>
            <motion.div
                initial={{scaleX: 0, scaleY: 0}}
                animate={{scaleX: 1, scaleY: 1}}
                exit={{scaleX: 0, scaleY: 0}}
            >
                <div className="StartMenuButtons">
                    <div className="startMenuButtonlayout">
                        <div>
                            <img src={lotr_Logo} alt=""/>
                        </div>
                        <NavLink to="/InputPage">
                            <motion.div whileHover={{scale: 1.1}}>
                                <button className="mainButtonStyling" onClick={() =>
                                    {
                                        soundToggleMute.sound && sound1.play()
                                    }
                                }>New Game
                                </button>
                            </motion.div>
                        </NavLink>
                    </div>

                    <div className="startMenuButtonlayout">
                        <Link to="/OptionsPage">
                            <motion.div whileHover={{scale: 1.1}}>
                                <button className="mainButtonStyling" onClick={() =>
                                    {
                                        soundToggleMute.sound && sound1.play()
                                    }
                                }>Options
                                </button>
                            </motion.div>
                        </Link>
                    </div>

                    <div className="startMenuButtonlayout">
                        <Link to="/Highscore">
                            <motion.div whileHover={{scale: 1.1}}>
                                <button className="mainButtonStyling" onClick={() =>
                                    {
                                        soundToggleMute.sound && sound1.play()
                                    }
                                }>Highscore
                                </button>
                            </motion.div>
                        </Link>
                    </div>
                    <div className="menuSwordsLogo">
                        <img id="menuSword1" src={menuSword} alt=""/>
                        <h1 id="triviaStartMenu">Trivia</h1>
                        <img id="menuSword2" src={menuSword} alt=""/>
                    </div>
                </div>
            </motion.div>

        </>
    )
}
