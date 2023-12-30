import React from 'react';


import { BoardList } from "../../utils/BoardData/Boards.js";
import './Sidebar.scss';
import BoardItem from "./BoardItems/BoardItem.jsx";
import Sidemenu from './SideMenu/Sidemenu.jsx';

const Sidebar = () => {
    return (
        <div className="app__sidebar">
            <div className="app__sidebar-bar">
                <h1 className="app__sidebar-title">Your Boards</h1>
                <div className="app__sidebar-scroll">
                    <ul className="boards">
                        {
                            BoardList.map(board => (
                                    <BoardItem item={board} key={board.id} />
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
           <Sidemenu boards= {BoardList} />
        </div>
    );
}

export default Sidebar;