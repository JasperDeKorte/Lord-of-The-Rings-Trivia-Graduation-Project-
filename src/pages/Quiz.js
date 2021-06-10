import React from 'react'
import { useState } from "react-hook-form";
import App from "../App";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InputPage from "./InputPage";

export default function Quiz(props) {

    return (
        <>
        <div className="popup">
            <div className="popup-inner">
                <h1>{}</h1>
            </div>
        </div>





            <Link to="/">
                <button className="mainButtonStyling">Back</button>
            </Link>
        </>

    )
}