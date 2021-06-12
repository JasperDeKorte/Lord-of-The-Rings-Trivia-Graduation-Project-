import React from 'react'
import {
    Route,
    Link,
    NavLink,
} from "react-router-dom";



export default function InputPage(props) {
    const [name, setName] = React.useState("")

    return (
        <div className="mainLayoutStyling">
            <label className="generalTextStyling">Voer hier speler naam in</label>
            <div>
                <input className="mainInputStyling" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>

            <div>
                <Link to="/">
                    <button id="backInputPage" className="mainButtonStyling">Back</button>
                </Link>

                <Route exact path="/Quiz" component={name}>

                </Route>

           <NavLink to="/Quiz" >
               <button className="mainButtonStyling" onClick={() => console.log(name)}>Playerset</button>
           </NavLink>



            </div>

        </div>
    )
}

