import React from "react";

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="app__navbar">
            <div className="app__navbar-input">
                <input type="text" placeholder="Happening App" />
            </div>
            <div className="app__navbar-button">
                <button>img</button>
            </div>
        </div>
    );
}

export default Navbar;