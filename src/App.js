import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetBoardsQuery } from "./slices/api/boardsApiSlice.js";
import { useDispatch } from "react-redux";
import { setActiveBoardId, setBoards } from "./slices/state/boardSlice.js";
import { ToastContainer } from "react-toastify";
import { Plus } from "react-feather";

import MainScreen from "./screens/MainScreen.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import Modal from "./components/Modal/Modal.jsx";
import "./App.scss";
import NoBoardsMessage from "./components/NoBoardsMessage/NoBoardsMessage.jsx";

const App = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const boardList = useSelector((state) => state.boards.boardList);
  const [toggleProjectModal, setToggleProjectModal] = useState(false);

  const {
    data: boards,
    isLoading,
    isSuccess,
  } = useGetBoardsQuery(userInfo._id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && isSuccess && boards) {
      dispatch(setBoards(boards));
    }
  }, [userInfo, isSuccess, boards]);

  if (isLoading) return <div>Loading...</div>;
  if (!isSuccess) return <div>Failed to load</div>;

  return (
    <div className="App">
      <Sidebar />
      {
        // If there are no boards, show a message to create a new board
        boardList.length === 0 ? (
          <NoBoardsMessage toggle={setToggleProjectModal} />
        ) : (
          <MainScreen setToggleProjectModal={setToggleProjectModal} />
        )
      }
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
  );
};

export default App;
