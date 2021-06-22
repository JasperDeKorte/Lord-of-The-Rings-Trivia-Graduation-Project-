import React, {Component} from 'react'
import {Howl} from 'howler'
import {

    Link
} from "react-router-dom";
import swordDraw from "../audioclips/swordDraw.mp3";
import { motion } from "framer-motion"

// GELUID GLOBAL MAKEN
// 'http://goldfirestudios.com/proj/howlerjs/sound.ogg'

const music = [
    {sound: 'http://goldfirestudios.com/proj/howlerjs/sound.mp3', label: "music"}
]


export default function OptionsPage() {
    const [isHovering, setIsHovering] = React.useState(false)

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
                <button onMouseEnter={() => {
                    setIsHovering(true);
                    sound2.play();
                }}
                        onMouseLeave={() => {
                            setIsHovering(false);
                            sound2.stop();
                        }}
                >
                    <button isHovering={isHovering}>
                        Hover over me!
                    </button>
                </button>
                <div>
                    <p>Hier komen de opties!</p>

                    <button className="quizButtonStyling">Turn sound off</button>
                    <input className="mainButtonStyling" type="checkbox" onChange={(event) => sound2.volume(0)}/>
                    <button className="mainButtonStyling" onClick={() => {
                        sound2.play()
                    }}>test
                    </button>
                </div>

                <div>
                    <Link to="/">
                        <button className="mainButtonStyling" onClick={() => {
                            sound2.play()
                        }}>Back
                        </button>
                    </Link>

                </div>
            </motion.div>
        </>
    )
}

