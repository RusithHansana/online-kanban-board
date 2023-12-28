import React, { useState, useEffect }from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';

import Task from '../Task/Task';
import './Card.scss';

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
                                {card.taskList.map((task, index) => (
                                    <Draggable
                                        draggableId={task.id}
                                        index={index}
                                        type="task"
                                        key={task.id}
                                    >
                                        {
                                            (provided) => (
                                                <li 
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <Task task={task} index={index} key={task.id}/>
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