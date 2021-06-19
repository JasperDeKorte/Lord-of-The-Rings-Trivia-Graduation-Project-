import React from 'react'
import {
    Link,
} from "react-router-dom";
import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";


export default function Highscore() {
    const sound2 =  new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    return(
        <>
            <div>
                <Link to="/">
                    <button className="mainButtonStyling" onClick={() => {
                        sound2.play()
                    }}>Back</button>
                </Link>

                <p>Dit is de Highscore page</p>
            </div>
        </>
    )
}