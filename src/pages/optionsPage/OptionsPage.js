import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom";
import { motion } from "framer-motion"
import { SoundContext } from "../../App";
import soundOFF from "../../assets/soundOFF.png";
import soundON from "../../assets/soundON.png";
import { sound2 } from "../../helpers/Sounds";
import menuSword from "../../assets/menuSword.png";

export default function OptionsPage() {
    const soundToggleMute = useContext(SoundContext);

    function soundToggleOn() {
        soundToggleMute.setSound(true);
        soundToggleMute.setSoundIcon(soundON);
        sound2.play();
        console.log("Sound is set on")
    }
    function soundToggleOff() {
        soundToggleMute.setSound(false);
        soundToggleMute.setSoundIcon(soundOFF);
        console.log("Sound is set Off");
    }

    return (
        <>
            <motion.div
                initial={{scaleY: 0}}
                animate={{scaleY: 1}}
                exit={{scaleY: 0}}>

                <img id="menuSword1" src={menuSword} alt=""/>
                <div className="optionsLayoutStyling">
                    <h1 id="OptionsTitle">Options</h1>

                    <div className="startMenuButtonlayout">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => soundToggleOn()}>Turn sound on</button>
                        </motion.div>
                    </div>

                    <div>
                        <img id="soundIcon" src={soundToggleMute.soundIcon} alt=""/>
                    </div>

                    <div className="startMenuButtonlayout">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => soundToggleOff()}>Turn sound off</button>
                        </motion.div>
                    </div>
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
                <img id="menuSword2" src={menuSword} alt=""/>
            </motion.div>
        </>
    )
}

