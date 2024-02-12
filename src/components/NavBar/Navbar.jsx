import React, { useEffect, useState, useRef } from "react";
import { LogOut, PlusCircle } from "react-feather";

import './Navbar.scss';
import { Boards } from "../../utils/BoardData/Boards";

const Navbar = ({ activeBoardId, toggle, setModalTitle }) => {
    const inputRef = useRef();
    const [boardName, setBoardName] = useState('');

    const handleModal = () => {
        setModalTitle("Create Project");
        toggle(prevState => !prevState);
    }

    useEffect(() => {
        activeBoardId ? setBoardName(Boards[activeBoardId].name) : setBoardName('Your Project');
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
                <div className="btn-addboards">
                    <PlusCircle onClick={handleModal} />
                </div>
                <div className="btn-logout">
                    <LogOut />
                </div>
            </div>
        </div>
    );
}

export default Navbar;