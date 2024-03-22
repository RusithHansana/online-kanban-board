import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from './Card/Card';
import './TaskBoard.scss';


const TaskBoard = ({ cards, activeBoardId, toggle, setModalTitle }) => {
  //react-beautiful-dnd does not work with strict mode  console.log(CardList);
  //this is the way to bypass it
  const [enabled, setEnabled] = useState(false);

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
              {
                cards.length === 0 ? (

                  cards.map((card, index) => (
                    <li key={card._id}>
                      {console.log(card)}
                      {/* <Card card={card} index={index} toggle={toggle} setModalTitle={setModalTitle} /> */}
                    </li>
                  ))
                ) : <p>Loading...</p>
              }
              {provided.placeholder}
            </ul>
          </div>
        )
      }
    </Droppable>
  );
}

export default TaskBoard;