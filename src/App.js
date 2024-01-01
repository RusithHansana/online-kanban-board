import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './App.scss';
import { BoardList } from './utils/BoardData/Boards.js';
import Navbar from './components/NavBar/Navbar.jsx';
import Sidebar  from './components/SideBar/Sidebar.jsx';
import TaskBoard from './components/TaskBoard/TaskBoard.jsx';
 
const App = () => {
  const [ board, setBoard ] = useState(BoardList[0]);

  const onDragEnd = (result) => {

  }

 
      return (
        <div className="App">
          <Sidebar />
          <div className='App__right'>
            <Navbar />
            <DragDropContext onDragEnd={ onDragEnd }>
              <TaskBoard CardList={ board.cardOrder }/>
            </DragDropContext>
          </div>
        </div>
      );
  
}

export default App;
