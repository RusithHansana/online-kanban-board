import React from 'react';

import './App.scss';
import Navbar from './containers/NavBar/Navbar.jsx';
import Sidebar  from './containers/SideBar/Sidebar.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
