import React, { useState } from 'react';

import './Sidebar.scss';
import BoardItem from "./BoardItems/BoardItem.jsx";
import Sidemenu from './SideMenu/Sidemenu.jsx';
import { Boards } from '../../utils/BoardData/Boards.js';

const Sidebar = ({ BoardIds, activeBoardId, setActiveBoardId }) => {
    return (
        <div className="app__sidebar">
            <div className="app__sidebar-bar">
                <h1 className="app__sidebar-title">Your Boards</h1>
                <div className="app__sidebar-scroll">
                    <ul className="boards">
                        {
                            BoardIds.length !== 0 ? (
                                BoardIds.map(boardId => {
                                    return <BoardItem
                                        item={Boards[boardId]}
                                        key={boardId}
                                        setActiveId={setActiveBoardId}
                                        isActive={boardId === activeBoardId}
                                    />
                                }
                                )
                            ) : null
                        }
                    </ul>
                </div>
            </div>
            <Sidemenu BoardIds={BoardIds} setActiveId={setActiveBoardId} />
        </div>
    );
}

export default Sidebar;