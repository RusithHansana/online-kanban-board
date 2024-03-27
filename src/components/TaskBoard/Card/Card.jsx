import React, { useState, useEffect } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useAddTasksMutation, useGetTasksMutation } from '../../../slices/tasksApiSlice.js';
import { Plus, Trash2 } from 'react-feather'

import Task from '../Task/Task';
import './Card.scss';
import { toast } from 'react-toastify';


const Card = ({ card, index, handleCardDelete }) => {
    const [enabled, setEnabled] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const [getTasks] = useGetTasksMutation();
    const [addTasks] = useAddTasksMutation();

    const fetchTasks = async (cardId) => {
        const response = await getTasks({ cardId: cardId }).unwrap();
        setTasks(response);
    }

    const handleAddTask = async (e) => {
        if (newTask === "") return;

        if (e.key === 'Enter' || e.type === 'click') {
            try {
                const response = await addTasks({ task: newTask, cardId: card._id }).unwrap();
                setTasks([...tasks, response]);
                e.target.value = "";
            } catch (error) {
                toast.error('Failed to add task');
            }
        }
    }

    const deteleCard = () => {
        handleCardDelete(card._id);
    }

    const handleTaskInput = (e) => {
        setNewTask(e.target.value);
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
                    <div className="cardheader">
                        <h1 className="app__card-title"
                            {...provided.dragHandleProps}
                        >
                            {card.cardName}
                        </h1>
                        <Trash2 onClick={() => deteleCard()} />
                    </div>
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
                                    <div className='addtask'>
                                        <Plus className='addbtn' onClick={handleAddTask} />
                                        <input
                                            type='text'
                                            placeholder='Add new task'
                                            onChange={handleTaskInput}
                                            onKeyDown={handleAddTask}
                                        />
                                    </div>
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