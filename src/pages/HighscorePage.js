import React from 'react'
import {
    Link,
} from "react-router-dom";
import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";
import {motion} from "framer-motion";


export default function Highscore() {
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
                <div>
                    <Link to="/">
                        <button className="mainButtonStyling" onClick={() => {
                            sound2.play()
                        }}>Back
                        </button>
                    </Link>

                    <p>Dit is de Highscore page</p>
                </div>
            </motion.div>
        </>
    )
}