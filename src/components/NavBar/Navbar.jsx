import React from "react";
import { LogOut } from "react-feather";

import './Navbar.scss';
import { Boards } from "../../utils/BoardData/Boards";

const Navbar = ({ activeBoardId }) => {
    return (
        <div className="app__navbar">
            <div className="app__navbar-input">
                <input type="text" placeholder={Boards[activeBoardId].name} />
            </div>
            <div className="app__navbar-button">
                <LogOut />
            </div>
        </div>
    );
}

export default Navbar;