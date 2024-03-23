import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useGetBoardsMutation } from "./slices/boardsApiSlice.js";
import { useGetCardsMutation } from "./slices/cardsApiSlice.js";

import "./App.scss";
import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";
import Modal from "./components/Modal/Modal.jsx";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const userInfo = useSelector((state) => state.auth.userInfo);

  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  const [getBoards] = useGetBoardsMutation();
  const [getCards, { isLoading }] = useGetCardsMutation();

  const fetchBoardList = async () => {
    const response = await getBoards({ userId: userInfo._id }).unwrap();
    setBoards(response);
    setActiveBoardId(response[0]._id);
  };

  const fetchCards = async (boardId) => {
    const response = await getCards({ boardId: boardId }).unwrap();
    setCards(response);
  };

  const setTaskBoard = (boardId) => {
    setActiveBoardId(boardId);
    fetchCards(boardId);
  };

  const onDragEnd = (result) => {};

  useEffect(() => {
    fetchBoardList();
    fetchCards(activeBoardId);
  }, []);

  return (
    <div className="App">
      <Sidebar
        boards={boards}
        activeBoardId={activeBoardId}
        setTaskBoard={setTaskBoard}
      />
      <div className="App__right">
        <Navbar
          activeBoard={boards.find((board) => board._id === activeBoardId)}
          toggle={setToggleModal}
          setModalTitle={setModalTitle}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskBoard
            cards={cards}
            activeBoardId={activeBoardId}
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
