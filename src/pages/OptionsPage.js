import React, { Component } from 'react'
import {Howl} from 'howler'
import {

    Link
} from "react-router-dom";

// 'http://goldfirestudios.com/proj/howlerjs/sound.ogg'

const audioClips = [
    {sound: 'http://goldfirestudios.com/proj/howlerjs/sound.mp3', label: "music"}
]


export default function OptionsPage() {
    const sound =  new Howl({
        src: ['http://goldfirestudios.com/proj/howlerjs/sound.mp3'],
        autoplay: false,
        volume: 0.2,

    })

    return (
        <>
            <div>
                <p>Hier komen de opties!</p>
                <h2>Sounds</h2>
                <button onClick={(event) => {
                    sound.play()
                }}>Play</button>

                <button className="quizButtonStyling">Turn sound off</button>
            </div>

            <div>
                <Link to="/">
                    <button className="mainButtonStyling">Back</button>
                </Link>

            </div>
        </>
    )
}

