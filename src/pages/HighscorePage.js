import React from 'react'
import {
    Link,
} from "react-router-dom";


export default function Highscore() {

    return(
        <>
            <div>
                <Link to="/">
                    <button className="mainButtonStyling">Back</button>
                </Link>

                <p>Dit is de Highscore page</p>
            </div>
        </>
    )
}