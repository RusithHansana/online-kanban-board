import React, { useState, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PlusCircle } from 'react-feather'

import Task from '../Task/Task';
import './Card.scss';

const Card = ({ card, index, toggle, setModalTitle }) => {
    const [enabled, setEnabled] = useState(false);

    const handleModal = () => {
        setModalTitle("Create Task");
        toggle(prevState => !prevState);
    }

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
        <Draggable
            draggableId={card._id}
            index={index}
            type="card"
        >
            {(provided) => (
                <div
                    className="app__card"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <h1 className="app__card-title"
                        {...provided.dragHandleProps}
                    >
                        {card.cardName}
                    </h1>
                    <Droppable
                        droppableId={card._id}
                        type="task"
                    >
                        {
                            (provided) => (
                                <ul
                                    className="app__card-tasklist"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {/* {card((taskId, index) => (
                                        <Draggable
                                            draggableId={taskId}
                                            index={index}
                                            type="task"
                                            key={taskId}
                                        >
                                            {
                                                (provided) => (
                                                    <li
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        Tasks
                                                    </li>
                                                )
                                            }
                                        </Draggable>

                                    ))} */}
                                    {provided.placeholder}
                                    {
                                        card.title === 'To do' ? <button className="btn-tasklist"><PlusCircle onClick={handleModal} /></button> : null
                                    }
                                </ul>
                            )
                        }
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}

export default Card;