import React from "react";
import {
    Link,
    NavLink,
} from "react-router-dom";
import {Howl} from "howler";
import swordSFX from "../audioclips/SwordPullOut.mp3"
import swordDraw from "../audioclips/swordDraw.mp3"
import {AnimatePresence, motion} from 'framer-motion'

export default function StartMenu() {
    const sound1 = new Howl({
        src: [swordSFX],
        autoplay: false,
        volume: 0.2,

    })

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
                <NavLink to="/InputPage">
                    <button className="mainButtonStyling" onClick={() => {
                        sound1.play()
                    }}>New Game
                    </button>
                </NavLink>

                <Link to="/OptionsPage">
                    <button className="mainButtonStyling" onClick={() => {
                        sound1.play()
                    }}>Options
                    </button>
                </Link>

                <Link to="/Highscore">
                    <button className="mainButtonStyling" onClick={() => {
                        sound1.play()
                    }}>Highscore
                    </button>
                </Link>
            </motion.div>
        </>
    )
}