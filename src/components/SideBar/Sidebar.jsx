import React from 'react';

import './Sidebar.scss';
import BoardItem from "./BoardItems/BoardItem.jsx";
import Sidemenu from './SideMenu/Sidemenu.jsx';
import { BoardList, Boards } from '../../utils/BoardData/Boards.js';

const Sidebar = ({ BoardIds }) => {
    return (
        <div className="app__sidebar">
            <div className="app__sidebar-bar">
                <h1 className="app__sidebar-title">Your Boards</h1>
                <div className="app__sidebar-scroll">
                    <ul className="boards">
                        {
                            BoardIds.map(boardId => {
                                return <BoardItem item={Boards[boardId]} key={boardId} />
                            }
                            )
                        }
                    </ul>
                </div>
            </div>
            <Sidemenu boards={BoardList} />
        </div>
    );
}

export default Sidebar;