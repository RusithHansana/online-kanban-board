import React, { useState, useEffect }from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PlusCircle } from 'react-feather'

import Task from '../Task/Task';
import './Card.scss';
import { Tasks } from '../../../utils/BoardData/Boards';

const Card = ({ card, index}) => {
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
        <Draggable
            draggableId={card.id}
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
                    {card.title}
                </h1>
                <Droppable
                    droppableId={card.id}
                    type="task"
                >
                    {
                        (provided) => (
                            <ul 
                                className="app__card-tasklist"
                                {...provided.droppableProps}
                                ref={provided.innerRef}    
                            >
                                {card.taskOrder.map((taskId, index) => (
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
                                                    <Task task={Tasks[taskId]} index={index}/>
                                                </li>
                                            )
                                        }
                                    </Draggable>
                                    
                                ))}
                                {provided.placeholder}
                                {
                                 card.title === 'To do'?<button className="btn-tasklist"><PlusCircle />Add More</button>: null   
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