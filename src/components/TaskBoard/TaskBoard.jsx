import React from 'react'

import Card from './Card/Card';
import './TaskBoard.scss';

const TaskBoard = ({board}) => {

  return (
    <div className="app__taskboard">
      <ul className="app__taskboard-cards">
        {board.cardList.map((card, index) => (
          <li key={card.id}>
            <Card id={card.id} card={card} index={index}/>
          </li>
        ))}
      </ul>
    </div>
  );  
}

export default TaskBoard;