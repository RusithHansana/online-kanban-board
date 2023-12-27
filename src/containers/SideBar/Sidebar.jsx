import React from 'react';


import { Boards } from "../../utils/BoardData/Boards.js";
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
                            Boards.map(item => (
                                    <BoardItem item={item} key={item.id} />
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
           <Sidemenu boards= {Boards} />
        </div>
    );
}

export default Sidebar;