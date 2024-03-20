import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/usersApiSlice.js";
import { logout } from "../../slices/authSlice";
import { LogOut, PlusCircle } from "react-feather";

import './Navbar.scss';
import { Boards } from "../../utils/BoardData/Boards";

const Navbar = ({ activeBoard, toggle, setModalTitle }) => {
    const inputRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [boardName, setBoardName] = useState('');

    const [logoutApiCall] = useLogoutMutation();

    const handleModal = () => {
        setModalTitle("Create Project");
        toggle(prevState => !prevState);
    }

    useEffect(() => {
        activeBoard ? setBoardName(activeBoard.boardName) : setBoardName('Your Project');
    }, [activeBoard]);

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

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
                    <LogOut onClick={logoutHandler} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;