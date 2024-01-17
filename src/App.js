import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useLocation } from "react-router-dom";

import "./App.scss";
import { Boards } from "./utils/BoardData/Boards.js";
import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";

const App = () => {
  const loc = useLocation();
  const user = loc.state;
  const boards = user.boardList;

  const [activeBoardId, setActiveBoardId] = useState(boards[0]);

  const onDragEnd = (result) => {};

  return (
    <div className="App">
      <Sidebar
        BoardIds={boards}
        activeBoardId={activeBoardId}
        setActiveBoardId={setActiveBoardId}
      />
      <div className="App__right">
        <Navbar activeBoardId={activeBoardId} />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskBoard
            CardList={
              boards.length !== 0 ? Boards[activeBoardId].cardOrder : []
            }
          />
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
