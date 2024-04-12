import React from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext } from "react-beautiful-dnd";
import { useGetCardsQuery } from '../slices/api/cardsApiSlice.js';

import Header from "../components/Header/Header.jsx";
import TaskBoard from "../components/TaskBoard/TaskBoard.jsx";

import "../App.scss";

const MainScreen = ({ setToggleProjectModal }) => {
    const userInfo = useSelector((state) => state.auth.userInfo);
    const activeBoardId = useSelector((state) => state.boards.activeBoardId);

    const { data: cards, isLoading, isSuccess } = useGetCardsQuery(activeBoardId);

    const onDragEnd = (result) => {
        // Handle drag and drop logic here
        console.log(result);
    };

    if (isLoading) return <div>Loading...</div>;
    if (!isSuccess) return <div>Failed to load</div>;

    return (
        <div className="App__right">
            <Header
                toggle={setToggleProjectModal}
                userName={userInfo.username}
            />
            <DragDropContext onDragEnd={onDragEnd}>
                <TaskBoard cards={cards} activeBoardId={activeBoardId} />
            </DragDropContext>
        </div>
    );
};

export default MainScreen;