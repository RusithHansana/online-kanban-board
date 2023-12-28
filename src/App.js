import React from 'react';

import './App.scss';
import { BoardList } from './utils/BoardData/Boards.js';
import Navbar from './containers/NavBar/Navbar.jsx';
import Sidebar  from './containers/SideBar/Sidebar.jsx';
import TaskBoard from './components/TaskBoard/TaskBoard.jsx';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='App__right'>
        <Navbar />
        <TaskBoard board={BoardList[0]}/>
      </div>
    </div>
  );
}

export default App;
