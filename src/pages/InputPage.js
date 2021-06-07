import React from 'react'
import App from "../App";
import StartMenu from "./StartMenu"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";


export default function InputPage() {
    const [name, setName] = React.useState("")

    return (
        <div className="mainLayoutStyling">
            <label className="generalTextStyling">Voer hier speler naam in</label>
            <div>
                <input className="mainInputStyling" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>

           <NavLink to="/Quiz">
               <button className="mainButtonStyling" onClick={() => console.log("playername is set!:", name)}>Playerset</button>
           </NavLink>

            <div>
            <Link to="/">
                <button id="backInputPage" className="mainButtonStyling">Back</button>
            </Link>
            </div>

            <h2>Jou naam:</h2>
            <p>{name}</p>

        </div>
    )
}

