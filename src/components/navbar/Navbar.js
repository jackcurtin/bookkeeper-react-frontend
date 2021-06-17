import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Bookkeeper <i className="fas fa-book"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Library
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Contribute
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Navbar;
