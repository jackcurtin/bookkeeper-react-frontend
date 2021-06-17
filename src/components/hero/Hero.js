import React from 'react';
import {Button} from "../button/button";


function Hero() {
    return (
        <div className="hero-container">
            <video src="../../media/hero-vid.mp4" autoPlay loop muted />
            <h1>FUEL YOUR IMAGINATION</h1>
            <p>Your next favorite book is just a few clicks away...</p>
            <div className="hero-btn">
                <Button className="btn"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>

        </div>
    );
}

export default Hero;
