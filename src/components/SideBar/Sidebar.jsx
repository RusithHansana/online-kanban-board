import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Sidebar.scss';
import BoardItem from "./BoardItems/BoardItem.jsx";
import Sidemenu from './SideMenu/Sidemenu.jsx';

import { useGetBoardsMutation } from '../../slices/boardsApiSlice.js';


const Sidebar = ({ BoardIds, activeBoardId, setActiveBoardId }) => {
    const [boards, setBoards] = useState([]);

    const userInfo = useSelector((state) => state.auth.userInfo);

    const [getBoards] = useGetBoardsMutation();

    const fetchBoards = async () => {
        const response = await getBoards({ _id: userInfo._id }).unwrap();
        setBoards(response);
    }

    useEffect(() => {
        fetchBoards();
    }, []);



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
                                        setActiveId={setActiveBoardId}
                                        isActive={board._id === activeBoardId}
                                    />
                                }) : <p>You don't have any projects yet...</p>
                        }
                    </ul>
                </div>
            </div>
            <Sidemenu Boards={boards} setActiveId={setActiveBoardId} />
        </div>
    );
}

export default Sidebar;