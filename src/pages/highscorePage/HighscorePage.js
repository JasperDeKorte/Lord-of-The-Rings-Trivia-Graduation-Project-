import React, { useContext } from 'react'
import {
    Link,
} from "react-router-dom";
import {Howl} from "howler";
import swordDraw from "../../audioclips/swordDraw.mp3";
import {motion} from "framer-motion";
import { SoundContext } from "../../App";
import menuSword from "../../assets/menuSword.png";

export default function Highscore() {
    const soundToggleMute = useContext(SoundContext);
    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                <img id="menuSword1" src={menuSword} alt=""/>
                <div className="StartMenuButtons">
                    <h1>Highscores</h1>
                    <div className="highscoreListStyling">
                        <h3>{localStorage.getItem("highscoreName0")}  {localStorage.getItem("highscoreScore0")}</h3>
                        <h3>{localStorage.getItem("highscoreName1")}  {localStorage.getItem("highscoreScore1")}</h3>
                        <h3>{localStorage.getItem("highscoreName2")}  {localStorage.getItem("highscoreScore2")}</h3>
                        <h3>{localStorage.getItem("highscoreName3")}  {localStorage.getItem("highscoreScore3")}</h3>
                        <h3>{localStorage.getItem("highscoreName4")}  {localStorage.getItem("highscoreScore4")}</h3>
                        <h3>{localStorage.getItem("highscoreName5")}  {localStorage.getItem("highscoreScore5")}</h3>
                        <h3>{localStorage.getItem("highscoreName6")}  {localStorage.getItem("highscoreScore6")}</h3>
                        <h3>{localStorage.getItem("highscoreName7")}  {localStorage.getItem("highscoreScore7")}</h3>
                    </div>

                    <Link to="/">
                        <button className="mainButtonStyling" onClick={() => {
                            soundToggleMute.sound && sound2.play()
                        }}>Back
                        </button>
                    </Link>
                </div>
                <img id="menuSword2" src={menuSword} alt=""/>
            </motion.div>
        </>
    )
}