import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../slices/usersApiSlice.js";
import { logout } from "../../slices/authSlice";
import { LogOut, Plus, Trash2 } from "react-feather";

import './Navbar.scss';

const Navbar = ({ activeBoard, toggle, setModalTitle, userInfo }) => {
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
            <div className="app__navbar-left">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={boardName}
                    onKeyDown={handleInputChange} />
                <div className="btn-header">
                    <Plus onClick={handleModal} />
                </div>
                <div className="btn-header">
                    <Trash2 />
                </div>
            </div>
            <div className="app__navbar-right">
                <div className="userinfo">
                    {userInfo.username}
                </div>
                <div className="btn-logout">
                    <LogOut onClick={logoutHandler} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;