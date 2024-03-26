import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useGetCardsMutation } from '../../slices/cardsApiSlice';

import Card from './Card/Card';
import './TaskBoard.scss';


const TaskBoard = ({ activeBoardId, toggle }) => {
  //react-beautiful-dnd does not work with strict mode  console.log(CardList);
  //this is the way to bypass it
  const [enabled, setEnabled] = useState(false);
  const [cards, setCards] = useState([]);

  const [getCards] = useGetCardsMutation();

  const fetchCards = async (boardId) => {
    const response = await getCards({ boardId: boardId }).unwrap();
    setCards(response);
  };
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    fetchCards(activeBoardId);


    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [activeBoardId]);

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
                cards.length !== 0 ? (

                  cards.map((card, index) => (
                    <li key={card._id}>
                      <Card card={card} index={index} />
                    </li>
                  ))
                ) : <p>No Cards Yet</p>
              }
              {provided.placeholder}
            </ul>
          </div>
        )
      }
    </Droppable >
  );
}

export default TaskBoard;