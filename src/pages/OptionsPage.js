import React from 'react'

import {

    Link
} from "react-router-dom";


export default function OptionsPage() {


    return (
        <div>
            <p>Hier komen de opties</p>



            <Link to="/">
                <button className="mainButtonStyling">Back</button>
            </Link>

        </div>
    )
}

