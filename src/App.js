import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useGetBoardsMutation } from "./slices/boardsApiSlice.js";

import "./App.scss";
import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const [boards, setBoards] = useState([]);

  const userInfo = useSelector((state) => state.auth.userInfo);

  const [getBoards] = useGetBoardsMutation();

  const fetchBoardList = async () => {
    const response = await getBoards({ _id: userInfo._id }).unwrap();
    setBoards(response);
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  const onDragEnd = (result) => {};

  return (
    <div className="App">
      <Sidebar
        boards={boards}
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className="App__right">
        <Navbar
          activeBoard={boards.find((board) => board._id === activeBoardId)}
          toggle={setToggleModal}
          setModalTitle={setModalTitle}
        />
        {/* <DragDropContext onDragEnd={onDragEnd}>
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
      ) : null} */}
      </div>
    </div>
  );
};

export default App;
