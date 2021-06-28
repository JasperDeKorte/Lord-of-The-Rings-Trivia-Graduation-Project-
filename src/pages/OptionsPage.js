import React, {useContext} from 'react'
import {Howl} from 'howler'
import {

    Link
} from "react-router-dom";
import swordDraw from "../audioclips/swordDraw.mp3";
import {motion} from "framer-motion"
import {soundContext} from "../App";
import soundON from "../assets/soundON.png"
import soundOFF from "../assets/soundOFF.png"

// GELUID GLOBAL MAKEN
// 'http://goldfirestudios.com/proj/howlerjs/sound.ogg'

// const music = [
//     {sound: 'http://goldfirestudios.com/proj/howlerjs/sound.mp3', label: "music"}
// ]



export default function OptionsPage() {
    const [soundIcon, setSoundIcon] = React.useState(soundON)

    const soundToggleMute = useContext(soundContext);
    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    function soundToggleOff() {
        soundToggleMute.setSound(false);
        console.log("Sound is set Off");
    }

    function soundToggleOn() {
        soundToggleMute.setSound(true);
        console.log("Sound is set on")
    }


    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}
            >
                <div className="mainLayoutStyling">
                    <div className="startMenuButtonlayout">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => soundToggleOff()}>Turn sound off
                            </button>
                        </motion.div>
                    </div>

                    <div>
                        {soundIcon}
                    </div>

                    <div className="startMenuButtonlayout">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => soundToggleOn()}>Turn sound on
                            </button>
                        </motion.div>
                    </div>

                    <motion.div whileHover={{scale: 1.1}}>
                        <button onClick={() => {
                            soundToggleMute.sound && sound2.play()
                        }}>test
                        </button>
                    </motion.div>

                </div>
            </motion.div>

            <div>
                <Link to="/">
                    <button className="mainButtonStyling" onClick={() => {
                        soundToggleMute.sound && sound2.play()
                    }}>Back
                    </button>
                </Link>
            </div>

        </>
    )
}

