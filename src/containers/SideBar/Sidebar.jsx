import React from "react";

import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="app__sidebar">
            <ul className="app__sidebar-boards">
                <div className="board-items">
                    <button><li>Happening App</li></button>
                </div>
                <div className="board-items">
                    <button><li>Portfolio</li></button>
                </div>
            </ul>
        </div>
    );
}

export default Sidebar;