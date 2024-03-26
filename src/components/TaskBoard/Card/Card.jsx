import React, { useState, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useGetTasksMutation } from '../../../slices/tasksApiSlice.js';
import { PlusCircle } from 'react-feather'

import Task from '../Task/Task';
import './Card.scss';

const Card = ({ card, index }) => {
    const [enabled, setEnabled] = useState(false);
    const [tasks, setTasks] = useState([]);

    const [getTasks] = useGetTasksMutation();

    const fetchTasks = async (cardId) => {
        const response = await getTasks({ cardId: cardId }).unwrap();
        setTasks(response);
    }

    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        fetchTasks(card._id);
        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        };
    }, [card._id]);

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
                                    {
                                        tasks.map((task, index) => (
                                            <Draggable
                                                draggableId={task._id}
                                                index={index}
                                                type="task"
                                                key={task._id}
                                            >
                                                {
                                                    (provided) => (
                                                        <li
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={provided.innerRef}
                                                        >
                                                            <Task task={task} />
                                                        </li>
                                                    )
                                                }
                                            </Draggable>

                                        ))}
                                    {provided.placeholder}
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