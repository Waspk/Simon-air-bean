import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import "../css/start.css";
import airbean from "../assets/graphics/airbean-landing.svg";
import introleft from "../assets/graphics/intro-graphic-left.svg";
import introright from "../assets/graphics/intro-graphic-right.svg";
import loader from "../assets/graphics/loader.png";

export default function Start() {
    const [redirect , setRedirect] =  useState(false)

useEffect(() => {
    setTimeout(() => setRedirect(true), 3000)
}, [])

    return (
        redirect ?
            <Redirect to="/menu" />
            : <div className="landing-page">
                <div className="img-content">
                 <img src={introleft}></img>
                    <div className="logo">
                        <img src={airbean}></img>
                        <img className="loader" src={loader}></img>
                    </div>
                    
                    <div className="img-right">
                        <img src={introright} ></img>
                    </div>
                </div>
            </div>
    )
}