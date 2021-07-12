import soundOFF from "../assets/soundOFF.png";
import soundON from "../assets/soundON.png";
import {useContext} from "react";
import {soundContext} from "../App";

const soundToggleMute = useContext(soundContext);

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