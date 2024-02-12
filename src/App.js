import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useLocation } from "react-router-dom";

import "./App.scss";
import { Boards } from "./utils/BoardData/Boards.js";
import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const loc = useLocation();
  const user = loc.state;
  const boards = user.boardList;

  const [activeBoardId, setActiveBoardId] = useState(boards[0]);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const onDragEnd = (result) => {};

  return (
    <div className="App">
      <Sidebar
        BoardIds={boards}
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className="App__right">
        <Navbar
          activeBoardId={activeBoardId}
          toggle={setToggleModal}
          setModalTitle={setModalTitle}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskBoard
            CardList={
              boards.length !== 0 ? Boards[activeBoardId].cardOrder : []
            }
            toggle={setToggleModal}
            setModalTitle={setModalTitle}
          />
        </DragDropContext>
      </div>
      {toggleModal ? (
        <>
          <div
            onClick={() => setToggleModal(!toggleModal)}
            className="overlay"
          ></div>
          <Modal toggle={setToggleModal} title={modalTitle} />
        </>
      ) : null}
    </div>
  );
};

export default App;
