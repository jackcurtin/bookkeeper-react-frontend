import React, {Component} from 'react';
import {Link} from "react-router-dom";

function Navbar () {
    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Bookkeeper <i className="fa-solid fa-book"></i>
                </Link>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
