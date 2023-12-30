import React from 'react';

import './Task.scss';

const Task = ({task, index}) => {
  return (
          <div className="task">
              {task.content}
          </div>
  )
}

export default Task;