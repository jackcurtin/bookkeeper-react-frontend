import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function Navbar () {
    const token = getToken();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Bookkeeper <i className="fas fa-book"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/library" className="nav-links" onClick={closeMobileMenu}>
                                Library
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contribute" className="nav-links" onClick={closeMobileMenu}>
                                Contribute
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
