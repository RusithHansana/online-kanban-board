import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useGetCardsMutation, useAddCardsMutation } from '../../slices/cardsApiSlice';
import { useDeleteCardMutation } from '../../slices/cardsApiSlice.js';

import Card from './Card/Card';
import { Plus } from 'react-feather';
import './TaskBoard.scss';
import { ToastContainer, toast } from 'react-toastify';


const TaskBoard = ({ activeBoardId }) => {
  //react-beautiful-dnd does not work with strict mode  console.log(CardList);
  //this is the way to bypass it
  const [enabled, setEnabled] = useState(false);
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState("");

  const [getCards] = useGetCardsMutation();
  const [addCards] = useAddCardsMutation();
  const [deleteCard] = useDeleteCardMutation();

  const fetchCards = async (boardId) => {
    const response = await getCards({ boardId: boardId }).unwrap();
    setCards(response);
  };

  const handleCardInput = (e) => {
    setNewCard(e.target.value);
  }

  const handleAddCard = async (e) => {
    if (newCard === "") return;

    if (e.key === 'Enter' || e.type === 'click') {
      try {
        const response = await addCards({ cardName: newCard, boardId: activeBoardId }).unwrap();
        setCards([...cards, response]);
        e.target.value = "";
        toast.success('Card added successfully');
      } catch (error) {
        toast.error("Failed to add card");
      }
    }
  }

  const handleCardDelete = async (cardId) => {
    try {
      const response = await deleteCard({ cardId }).unwrap();
      setCards([...cards.filter(card => card._id !== cardId)]);
      toast.success('Card deleted successfully');
    } catch (error) {
      toast.error('Failed to delete card');
    }
  }

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