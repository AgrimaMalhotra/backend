const express = require('express');
const taskRouter = require('./routes/task');
const server = express();
const PORT = 6000;
global.JSONdata = {
  'userId': 1,
  'tasks': [
    {
      'id': 1,
      'task': 'groceries',
      'isComplete': false
    },
    {
      'id': 2,
      'task': 'mail',
      'isComplete': false
    },
    {
      'id': 3,
      'task': 'Dry cleaning',
      'isComplete': false
    }
  ]
};
global.taskId = 3;
server.use(express.json());
server.use('/todo', taskRouter);
server.listen(PORT, () => {
  console.log(`ToDo App at Port ${PORT}`);
});