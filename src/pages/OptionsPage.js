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


export default function OptionsPage() {


    const soundToggleMute = useContext(soundContext);


    const sound2 = new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    function soundToggleOff() {
        soundToggleMute.setSound(false);
        soundToggleMute.setSoundIcon(soundOFF);
        console.log("Sound is set Off");
    }

    function soundToggleOn() {
        soundToggleMute.setSound(true);
        soundToggleMute.setSoundIcon(soundON);
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
                            <button className="mainButtonStyling" onClick={() => soundToggleOn()}>Turn sound on
                            </button>
                        </motion.div>
                    </div>

                    <div>
                        <img id="soundIcon" src={soundToggleMute.soundIcon} alt=""/>
                    </div>

                    <div className="startMenuButtonlayout">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => soundToggleOff()}>Turn sound off
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


                <div className="OptionsPageButtons">
                    <Link to="/">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                soundToggleMute.sound && sound2.play()
                            }}>Back
                            </button>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

