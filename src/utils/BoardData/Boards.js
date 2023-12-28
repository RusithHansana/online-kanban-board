const Tasks = {
  "t1": { 
    id: "t1", 
    content: 'Take out the garbage' 
  },
  "t2": { 
    id: "t2", 
    content: 'Watch my favorite show' 
  },
  "t3": { 
    id: "t3", 
    content: 'Charge my phone' 
  },
  "t4": { 
    id: "t4", 
    content: 'Cook dinner' 
  },

}


export const Cards = {
  "c1": {
    id: "c1",
    title: 'To do',
    taskList: [ Tasks["t1"], Tasks["t2"] ],
  },
  "c2": {
    id: "c2",
    title: 'In progress',
    taskList: [Tasks["t3"]],
  },
  "c3": {
    id: "c3",
    title: 'Done',
    taskList: [Tasks["t4"]],
  },
}

export const Boards = {
  "b1": {
    id: "b1", 
    name: 'Chores', 
    color: '--highlight-green',
    cardList: [ Cards["c1"], Cards["c2"], Cards["c3"]]
  },
  "b2": {
    id: "b2", 
    name: 'Mobile App', 
    color: '--highlight-cyan'
  }

}


export const BoardList = [ Boards["b1"], Boards["b2"]];
