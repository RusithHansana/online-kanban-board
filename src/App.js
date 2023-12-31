import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import './App.scss';
import { BoardList } from './utils/BoardData/Boards.js';
import Navbar from './components/NavBar/Navbar.jsx';
import Sidebar  from './components/SideBar/Sidebar.jsx';
import TaskBoard from './components/TaskBoard/TaskBoard.jsx';
 
class App extends Component {
  constructor(){
    super()
    this.state = {
      cardList: BoardList[0].cardOrder
    }
  }
 
  
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    let newState = [];
    if(!destination)
      return;

    console.log(source);
    //Home is where the element is dragged from
    const home = this.state.cardList[source.index];
    if(source.droppableId === destination.droppableId){
      const taskList = [...home.taskList];
      taskList.splice(source.index, 1);
      taskList.splice(destination.index, 0, home.taskList[source.index])
      
      const newHome = {
        ...home,
        taskList: taskList 
      }
      
      newState = [...this.state.cardList]
      newState[source.index] = newHome
    }
    
    this.setState({
      cardList: newState
    })
    return;
  }

  render(){
      return (
        <div className="App">
          <Sidebar />
          <div className='App__right'>
            <Navbar />
            <DragDropContext onDragEnd={ this.onDragEnd }>
              <TaskBoard CardList={ this.state.cardList }/>
            </DragDropContext>
          </div>
        </div>
      );
  }
}

export default App;
