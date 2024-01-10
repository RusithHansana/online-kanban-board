import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.scss";
import { Boards, Users } from "./utils/BoardData/Boards.js";
import Navbar from "./components/NavBar/Navbar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TaskBoard from "./components/TaskBoard/TaskBoard.jsx";

const App = () => {
  const [user, setUser] = useState(Users.u1);
  const [board, setBoard] = useState(user.boardList);

  const onDragEnd = (result) => {};

  return (
    <div className="App">
      <Sidebar BoardIds={user.boardList} />
      <div className="App__right">
        <Navbar />
        <DragDropContext onDragEnd={onDragEnd}>
          <TaskBoard CardList={Boards[board[0]].cardOrder} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
