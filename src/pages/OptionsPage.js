import React, { Component } from 'react'
import {Howl} from 'howler'
import {

    Link
} from "react-router-dom";
import swordDraw from "../audioclips/swordDraw.mp3";

// 'http://goldfirestudios.com/proj/howlerjs/sound.ogg'

const audioClips = [
    {sound: 'http://goldfirestudios.com/proj/howlerjs/sound.mp3', label: "music"}
]


export default function OptionsPage() {
    const [volume, setVolume] = React.useState(0.2)

    const sound2 =  new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    return (
        <>
            <div>
                <p>Hier komen de opties!</p>
                <h2>Sounds</h2>

                <button className="quizButtonStyling">Turn sound off</button>
                <input className="mainButtonStyling" type="checkbox" onChange={() => sound2.volume(0)} />
            </div>

            <div>
                <Link to="/">
                    <button className="mainButtonStyling" onClick={() => {
                        sound2.play()
                    }}>Back</button>
                </Link>

            </div>
        </>
    )
}

