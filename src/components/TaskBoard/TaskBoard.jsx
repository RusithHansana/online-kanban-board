import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useGetCardsMutation } from "../../slices/cardsApiSlice.js";

import Card from './Card/Card';
import './TaskBoard.scss';


const TaskBoard = ({ activeBoardId, toggle, setModalTitle }) => {
  //react-beautiful-dnd does not work with strict mode  console.log(CardList);
  //this is the way to bypass it
  const [enabled, setEnabled] = useState(false);
  const [cards, setCards] = useState([]);

  const [getCards] = useGetCardsMutation();

  const fetchCardList = async () => {
    const response = await getCards({ boardId: activeBoardId }).unwrap();
    setCards(response);
  }


  useEffect(() => {
    fetchCardList();
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
                      card
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