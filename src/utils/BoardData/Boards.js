const Tasks = {
  1: { 
    id: 1, 
    content: 'Take out the garbage' 
  },
  2: { 
    id: 2, 
    content: 'Watch my favorite show' 
  },
  3: { 
    id: 3, 
    content: 'Charge my phone' 
  },
  4: { 
    id: 4, 
    content: 'Cook dinner' 
  },

}


export const Cards = {
  1: {
    id: 1,
    title: 'To do',
    taskList: [ Tasks[1], Tasks[2] ],
  },
  2: {
    id: 2,
    title: 'In progress',
    taskList: [Tasks[3]],
  },
  3: {
    id: 3,
    title: 'Done',
    taskList: [Tasks[4]],
  },
}

export const Boards = {
  1: {
    id: 1, 
    name: 'Chores', 
    color: '--highlight-green',
    cardList: [ Cards[1], Cards[2], Cards[3]]
  },
  2: {
    id: 2, 
    name: 'Mobile App', 
    color: '--highlight-cyan'
  }

}


export const BoardList = [ Boards[1], Boards[2]];
