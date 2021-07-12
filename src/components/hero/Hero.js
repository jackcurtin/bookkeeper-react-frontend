import React from 'react';
import {Button} from "../button/button";
import "./Hero.css";
import "../../App.css";


function Hero() {
    return (
        <div className="hero-container">
            <video src="https://elasticbeanstalk-us-east-2-911671307707.s3.us-east-2.amazonaws.com/hero-vid.mp4" autoPlay loop muted />
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
