import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { useGetBoardsQuery } from "./slices/api/boardsApiSlice.js";
import { setBoards } from "./slices/state/boardSlice.js";

import { ToastContainer } from "react-toastify";

import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./App.scss";

const App = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const boardList = useSelector((state) => state.boards.boardList);

  const dispatch = useDispatch();

  const [toggleProjectModal, setToggleProjectModal] = useState(false);

  const {
    data: boards,
    isLoading,
    isSuccess,
  } = useGetBoardsQuery(userInfo._id);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId, type } = result;
  };

  useEffect(() => {
    isSuccess && dispatch(setBoards(boards));
  }, [isSuccess]);

  return (
    !isLoading && (
      <div className="App">
        <Sidebar />
        <div className="App__right">
          <Header
            activeBoard={boards.find((board) => board._id === activeBoardId)}
            toggle={setToggleProjectModal}
            userName={userInfo.userName}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            <TaskBoard activeBoardId={activeBoardId} />
          </DragDropContext>
        </div>
        {toggleProjectModal ? (
          <>
            <div
              onClick={() => setToggleProjectModal(!toggleProjectModal)}
              className="overlay"
            ></div>
            <Modal toggle={setToggleProjectModal} />
          </>
        ) : null}
        <ToastContainer />
      </div>
    )
  );
};

export default App;
