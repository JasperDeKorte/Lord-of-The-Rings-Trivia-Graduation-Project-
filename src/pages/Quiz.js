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

export default function Quiz() {

    return (
        <>
            <h1>Playername</h1>







            <Link to="/">
                <button className="mainButtonStyling">Back</button>
            </Link>
        </>

    )
}