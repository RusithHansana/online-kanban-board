import React from 'react';
import BoardItem from "./BoardItems/BoardItem.jsx";
import Sidemenu from './SideMenu/Sidemenu.jsx';


import './Sidebar.scss';

const Sidebar = ({ boards, activeBoardId, setTaskBoard }) => {

    return (
        <div className="app__sidebar">
            <div className="app__sidebar-bar">
                <h1 className="app__sidebar-title">Your Boards</h1>
                <div className="app__sidebar-scroll">
                    <ul className="boards">
                        {
                            boards.length !== 0 ?
                                boards.map(board => {
                                    return <BoardItem
                                        item={board}
                                        key={board._id}
                                        setActiveId={setTaskBoard}
                                        isActive={board._id === activeBoardId}
                                    />
                                }) : <p>You don't have any projects yet...</p>
                        }
                    </ul>
                </div>
            </div>
            <Sidemenu Boards={boards} setActiveId={setTaskBoard} />
        </div>
    );
}

export default Sidebar;