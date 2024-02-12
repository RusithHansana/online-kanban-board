import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from './Card/Card';
import './TaskBoard.scss';
import { Cards } from '../../utils/BoardData/Boards';

const TaskBoard = ({ CardList, toggle, setModalTitle }) => {
  //react-beautiful-dnd does not work with strict mode
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
              {CardList.map((cardId, index) => (
                <li key={cardId}>
                  <Card card={Cards[cardId]} index={index} toggle={toggle} setModalTitle={setModalTitle} />
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