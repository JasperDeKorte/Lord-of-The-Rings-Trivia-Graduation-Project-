import React, { useContext } from 'react'
import {
    Link,
} from "react-router-dom";
import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";
import {motion} from "framer-motion";
import {nameAvatarContext, soundContext} from "../App";



export default function Highscore() {
    const nameAvatarValue = useContext(nameAvatarContext);
    const soundToggleMute = useContext(soundContext);

    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    localStorage.setItem("HighscoreName", nameAvatarValue.name)

    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                <div className="StartMenuButtons">
                    <h1>*Under development*</h1>
                    <h1>{nameAvatarValue.name}: score</h1>
                    <p>Dit is de Highscore page</p>

                    <Link to="/">
                        <button className="mainButtonStyling" onClick={() => {
                            soundToggleMute.sound && sound2.play()
                        }}>Back
                        </button>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}