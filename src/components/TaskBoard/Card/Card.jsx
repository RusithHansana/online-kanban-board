import React from 'react'

import Task from '../Task/Task';
import './Card.scss';

const Card = ({card}) => {
    return (
    <div className="app__card">
        <h1 className="app__card-title">{card.title}</h1>
        <ul className="app__card-tasklist">
            {
                card.taskList.map(task => (
                    <li key={task.id}>
                        <Task task={task}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Card;