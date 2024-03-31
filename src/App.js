import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { useSelector } from "react-redux";
import { useGetBoardsMutation } from "./slices/api/boardsApiSlice.js";
import { useGetCardsMutation } from "./slices/api/cardsApiSlice.js";
import { useAddBoardsMutation } from "./slices/api/boardsApiSlice.js";
import { useDeleteBoardMutation } from "./slices/api/boardsApiSlice.js";

import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./App.scss";

const App = () => {
  const [activeBoardId, setActiveBoardId] = useState("");
  const [toggleProjectModal, setToggleProjectModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const userInfo = useSelector((state) => state.auth.userInfo);

  const [boards, setBoards] = useState([]);

  const [getBoards, { isLoading }] = useGetBoardsMutation();
  const [addBoards] = useAddBoardsMutation();
  const [deleteBoard] = useDeleteBoardMutation();

  const fetchBoardList = async () => {
    const response = await getBoards({ userId: userInfo._id }).unwrap();
    setBoards(response);
  };

  const setTaskBoard = (boardId) => {
    setActiveBoardId(boardId);
  };

  const handleAddProjectButton = async (boardName, color) => {
    if (!boardName) {
      toast.error("Please enter project name");
      return;
    }
    try {
      const response = await addBoards({
        boardName,
        color,
        userId: userInfo._id,
      });
      setBoards([...boards, response]);
    } catch (error) {
      toast.error("Failed to add project");
    }
  };

  const handleDeleteBoard = async () => {
    try {
      const response = await deleteBoard({ boardId: activeBoardId }).unwrap();
      setBoards([...boards.filter((board) => board._id !== activeBoardId)]);
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId, type } = result;
  };

  useEffect(() => {
    fetchBoardList();
    boards.length !== 0 && setTaskBoard(boards[0]?._id);
  }, [boards.length]);

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
          toggle={setToggleProjectModal}
          setModalTitle={setModalTitle}
          handleDeleteBoard={handleDeleteBoard}
          userInfo={userInfo}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskBoard
            activeBoardId={activeBoardId}
            setModalTitle={setModalTitle}
          />
        </DragDropContext>
      </div>
      {toggleProjectModal ? (
        <>
          <div
            onClick={() => setToggleProjectModal(!toggleProjectModal)}
            className="overlay"
          ></div>
          <Modal
            toggle={setToggleProjectModal}
            handleAddProjectButton={handleAddProjectButton}
            title={modalTitle}
          />
        </>
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default App;
