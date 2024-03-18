import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.scss";
import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const onDragEnd = (result) => {};

  return (
    <div className="App">
      <Sidebar
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
            CardList={[]}
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
