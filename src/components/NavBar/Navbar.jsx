import React from "react";
import { LogOut } from "react-feather";

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="app__navbar">
            <div className="app__navbar-input">
                <input type="text" placeholder="Happening App" />
            </div>
            <div className="app__navbar-button">
                <LogOut />
            </div>
        </div>
    );
}

export default Navbar;