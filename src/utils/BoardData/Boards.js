export const Tasks = {
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
  "t5": {
    id:"t5",
    content: 'Fix this damn error'
  },
  "t6": {
    id:"t6",
    content: 'Fix new error'
  }

}


export const Cards = {
  "c1": {
    id: "c1",
    title: 'To do',
    taskOrder: ["t1", "t2", "t6"],
  },
  "c2": {
    id: "c2",
    title: 'In progress',
    taskOrder: ["t5", "t4"],
  },
  "c3": {
    id: "c3",
    title: 'Done',
    taskOrder: ["t3"],
  },
}

export const Boards = {
  "b1": {
    id: "b1", 
    name: 'Chores', 
    color: '--highlight-green',
    cardOrder: [ "c1", "c2", "c3"]
  },
  "b2": {
    id: "b2", 
    name: 'Mobile App', 
    color: '--highlight-cyan'
  }

}


export const BoardList = [ Boards["b1"], Boards["b2"]];
