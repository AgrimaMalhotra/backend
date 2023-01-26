const express = require('express');
const server = express();
server.use(express.json());
const PORT = 6000;

//Inital ToDo DB
var data = {
  userId: 1,
  tasks: [
    {
      id: 1,
      task: 'groceries',
      isComplete: false
    },
    {
      id: 2,
      task: 'mail',
      isComplete: false
    },
    {
      id: 3,
      task: 'Dry cleaning',
      isComplete: false
    }
  ]
};

server.listen(PORT, () => {
  console.log(`ToDo App at Port ${PORT}`);
});