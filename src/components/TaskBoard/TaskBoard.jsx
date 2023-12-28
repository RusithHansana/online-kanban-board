import React, { useState, useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Card from './Card/Card';
import './TaskBoard.scss';

const TaskBoard = ({board}) => {
  //react-beautiful-dnd does not work with strict mode
  //this is the way to bypass it
  const [ enabled, setEnabled ] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
       cancelAnimationFrame(animation);
       setEnabled(false);
    };
  }, []);

  if (!enabled) {
      return null;
  }

  return (
    <Droppable
      droppableId="all"
      direction="horizontal"
      type="card"
    >
    {
      (provided) => (
        <div className="app__taskboard"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <ul className="app__taskboard-cards">
            {board.cardList.map((card, index) => (
              <li key={card.id}>
                <Card card={card} index={index+1}/>
              </li>
            ))}
            {provided.placeholder}
          </ul>
        </div>
      )
    }
    </Droppable>
  );  
}

export default TaskBoard;