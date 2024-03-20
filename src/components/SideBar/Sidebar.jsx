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
        const response = await getBoards(userInfo.id).unwrap();
        console.log(response);
    }

    useEffect(() => {
        fetchBoards();
    }, []);



    return (
        <div className="app__sidebar">
            <div className="app__sidebar-bar">
                <h1 className="app__sidebar-title">Your Boards</h1>
                <div className="app__sidebar-scroll">
                    {/* <ul className="boards">
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
                            ) : <p>You don't have any projects yet...</p>
                        }
                    </ul> */}
                </div>
            </div>
            <Sidemenu BoardIds={BoardIds} setActiveId={setActiveBoardId} />
        </div>
    );
}

export default Sidebar;