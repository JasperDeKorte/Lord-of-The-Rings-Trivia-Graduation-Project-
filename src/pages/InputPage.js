import React from 'react'
import {
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import {Howl} from "howler";
import swordDraw from "../audioclips/swordDraw.mp3";

// AVATAR TOEVOEGEN

export default function InputPage(props) {
    const [name, setName] = React.useState("")
    const [avatar, setAvatar] = React.useState("")
    const sound2 =  new Howl({
        src: [swordDraw],
        autoplay: false,
        volume: 0.2,

    })

    return (
        <div className="mainLayoutStyling">
            <label className="generalTextStyling">Voer hier speler naam in</label>
            <div>
                <input className="mainInputStyling" value={name} onChange={(event) => setName(event.target.value)}/>
                <select className="mainInputStyling" name="avatermMenu" value={avatar} onChange={(event) => setAvatar(event.target.value)}>
                    <option id={"emoji1"}>😍</option>
                    <option id={"emoji2"}>😂</option>
                    <option id={"emoji3"}>😎</option>
                    <option id={"emoji4"}>✌</option>
                </select>
            </div>

            <div>
                <Link to="/">
                    <button id="backInputPage" className="mainButtonStyling" onClick={() => {
                        sound2.play()
                    }}>Back</button>
                </Link>

                <Route exact path="/Quiz" component={name}>

                </Route>

           <NavLink to="/Quiz" >
               <button className="mainButtonStyling" onClick={() => {
                   sound2.play()
               }}>Playerset</button>
           </NavLink>



            </div>

        </div>
    )
}

