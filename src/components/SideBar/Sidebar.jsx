import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBoardsQuery } from '../../slices/api/boardsApiSlice.js';
import { setActiveBoardId } from '../../slices/state/boardSlice.js';
import BoardItem from "./BoardItems/BoardItem.jsx";
import Sidemenu from './SideMenu/Sidemenu.jsx';

import './Sidebar.scss';

const Sidebar = ({ activeBoardId, setTaskBoard }) => {
    const userInfo = useSelector((state) => state.auth.userInfo);

    const { data: boards } = useGetBoardsQuery(userInfo._id);
    const dispatch = useDispatch();

    useEffect(() => {
        if (boards && boards.length !== 0) {
            dispatch(setActiveBoardId(boards[0]._id));
        }
    }, [boards]);

    //TODO: Lift the state of the sidemenu to this component
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
                                        board={board}
                                        key={board._id}
                                    />
                                }) : <p>You don't have any projects yet...</p>
                        }
                    </ul>
                </div>
            </div>
            <Sidemenu boards={boards} />
        </div>
    );
}

export default Sidebar;