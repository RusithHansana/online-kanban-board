import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useAddCardsMutation } from '../../slices/api/cardsApiSlice.js';
import { useDeleteCardMutation } from '../../slices/api/cardsApiSlice.js';
import Card from './Card/Card';

import { Plus } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import './TaskBoard.scss';



const TaskBoard = ({ cards, activeBoardId }) => {
  //react-beautiful-dnd does not work with strict mode  console.log(CardList);
  //this is the way to bypass it
  const [enabled, setEnabled] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [newCard, setNewCard] = useState("");

  const [addCards] = useAddCardsMutation();
  const [deleteCard] = useDeleteCardMutation();

  const handleCardInput = (e) => {
    setNewCard(e.target.value);
  }

  const handleAddCard = async (e) => {
    if (newCard === "") return;

    if (e.key === 'Enter' || e.type === 'click') {
      try {
        const response = await addCards({ cardName: e.target.value, boardId: activeBoardId }).unwrap();
        setCardList([...cardList, response]);
        e.target.value = "";
        toast.success('Card added successfully');
      } catch (error) {
        toast.error("Failed to add card");
      }
    }
  }

  const handleCardDelete = async (cardId) => {
    try {
      const response = await deleteCard({ cardId: cardId, boardId: activeBoardId }).unwrap();
      setCardList(cardList.filter(card => card._id !== cardId));
      toast.success('Card deleted successfully');
    } catch (error) {
      toast.error('Failed to delete card');
    }
  }

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    setCardList(cards);
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, [cards]);

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
                cardList ? (

                  cardList.map((card, index) => (
                    <li key={card._id}>

                      <Card card={card} index={index} handleCardDelete={handleCardDelete} />
                    </li>
                  ))
                ) : <p>You have no cards yet...</p>
              }
              {provided.placeholder}
              <div className='addtask card'>
                <Plus className='addbtn' onClick={handleAddCard} />
                <input
                  type='text'
                  placeholder='Add new Card'
                  onChange={handleCardInput}
                  onKeyDown={handleAddCard}
                />
              </div>
            </ul>
            <ToastContainer />
          </div>
        )
      }

    </Droppable >
  );
}

export default TaskBoard;