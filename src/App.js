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
  const [boards, setBoards] = useState(user.boardList);

  const onDragEnd = (result) => {};

  return (
    <div className="App">
      <Sidebar BoardIds={user.boardList} />
      <div className="App__right">
        <Navbar />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskBoard CardList={Boards[boards[0]].cardOrder} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
