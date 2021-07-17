import React, { useContext } from 'react'
import {
    Link,
    NavLink,
} from "react-router-dom";
import { motion } from 'framer-motion'
import { NameAvatarContext, SoundContext } from "../../App";
import { sound1, sound2 } from "../../helpers/Sounds";
import menuSword from "../../assets/menuSword.png";

export default function InputPage() {
    const nameAvatarValue = useContext(NameAvatarContext)
    const soundToggleMute = useContext(SoundContext)

    return (
        <motion.div
            initial={{scaleY: 0}}
            animate={{scaleY: 1}}
            exit={{scaleY: 0}}
        >
            <img id="menuSword1" src={menuSword} alt=""/>
            <div className="">
                <div className="InputPagePlayerInput">
                    <label className="generalTextStyling">Enter Your Playername</label>
                    <input className="mainInputStyling"
                           value={nameAvatarValue.name}
                           onChange={(event) => nameAvatarValue.setName(event.target.value)}/>
                </div>

                <div className="InputPageSelectInput">
                    <label id="selectYourAvatarLabel" className="generalTextStyling">Select Your Avatar</label>
                        <select className="mainInputStyling" name="avaterMenu" value={nameAvatarValue.avatar}
                                onChange={(event) => nameAvatarValue.setAvatar(event.target.value)}>
                            <option id={"emoji2"}>😂</option>
                            <option id={"emoji3"}>😎</option>
                            <option id={"emoji4"}>✌</option>
                            <option id={"emoji5"}>❤</option>
                            <option id={"emoji6"}>🙄</option>
                            <option id={"emoji7"}>😜</option>
                            <option id={"emoji8"}>🎱</option>
                            <option id={"emoji9"}>🍔</option>
                            <option id={"emoji10"}>🍤</option>
                            <option id={"emoji-Empty"}></option>
                        </select>
                </div>

                <div className="InputPageNavButtons">
                    <Link to="/">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                soundToggleMute.sound && sound2.play()
                            }}>Back
                            </button>
                        </motion.div>
                    </Link>

                    <NavLink to="/Quiz">
                        <motion.div whileHover={{scale: 1.1}}>
                            <button className="mainButtonStyling" onClick={() => {
                                soundToggleMute.sound && sound1.play()
                            }}>Playerset
                            </button>
                        </motion.div>
                    </NavLink>
                </div>
            </div>
            <img id="menuSword2" src={menuSword} alt=""/>
        </motion.div>
    )
}

