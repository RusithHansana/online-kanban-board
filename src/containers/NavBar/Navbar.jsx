import React from "react";

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="app__navbar">
            <div className="app__navbar-logo">
                <img src="" alt="logo" />
            </div>
            <div className="app__navbar-input">
                <input type="text" placeholder="Board Name" />
            </div>
            <div className="app__navbar-button">
                <button>Account</button>
            </div>
        </div>
    );
}

export default Navbar;