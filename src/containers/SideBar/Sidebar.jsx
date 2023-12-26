import React, { useState } from 'react';
import { HiMenuAlt2, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { Boards } from "../../utils/BoardData/Boards.js";
import './Sidebar.scss';
import BoardItem from "./BoardItem.jsx";

const Sidebar = () => {
    const [ toggle, setToggle ] = useState(false);

    return (
        <div className="app__sidebar">
            <div className="app__sidebar-bar">
                <h1 className="app__sidebar-title">Your Boards</h1>
                <div className="app__sidebar-scroll">
                    <ul className="boards">
                        {
                            Boards.map(item => (
                                    <BoardItem item={item} key={item.id} />
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="app__sidebar-menu">
                <HiMenuAlt2 onClick={ () => setToggle(true) }/>
                {
                    toggle && (
                        <h1 className="app__sidebar-menu title">Your Boards</h1>
                    )
                }
            </div>
        </div>
    );
}

export default Sidebar;