import React from "react";

import BoardItem from "./BoardItem.jsx";
import { Boards } from "../../utils/BoardData/Boards.js";
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="app__sidebar">
            <h1>Your Boards</h1>
            <ul className="app__sidebar-boards">
                {
                    Boards.map(item => (
                            <BoardItem item={item} key={item.id}/>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default Sidebar;