import React, { useEffect, useState, useRef } from "react";
import { LogOut } from "react-feather";

import './Navbar.scss';
import { Boards } from "../../utils/BoardData/Boards";

const Navbar = ({ activeBoardId }) => {
    const inputRef = useRef();
    const [boardName, setBoardName] = useState('');

    useEffect(() => {
        setBoardName(Boards[activeBoardId].name);
    }, [activeBoardId]);

    const handleInputChange = (e) => {
        //onKeyDown identifies keyboard events
        if (e.key === 'Enter') {
            setBoardName(e.target.value);
            //update the boardname in the backend


            //clearing the input field after entering the value
            inputRef.current.value = '';
        }
    }
    return (
        <div className="app__navbar">
            <div className="app__navbar-input">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={boardName}
                    onKeyDown={handleInputChange} />
            </div>
            <div className="app__navbar-button">
                <LogOut />
            </div>
        </div>
    );
}

export default Navbar;