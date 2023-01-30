const express = require('express');
const server = express();
server.use(express.json());
const PORT = 6000;
var taskId = 3;
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

const generateTask = (task) => {
  taskId++;
  return {
    id: taskId,
    task: task,
    isComplete: false
  };
}
const getIdEntry = (id, dataTask) => {
  let idx;
  dataTask.forEach((obj, index) => {
    if (obj.id == id)
      idx = index;
  });
  return idx;
}
server.route('/tasks')
  .get((request, response) => {
    console.log('GET Request');
    response.send(data);
  })
  .post((request, response) => {
    console.log('POST Request');
    data.tasks.push(generateTask(request.body.tasks));
    response.send(data);
  });

server.route('/task/:id')
  .get((request, response) => {
    console.log('GET Request');
    const id = Number(request.params.id);
    response.send(data.tasks[getIdEntry(id, data.tasks)]);
  })
  .put((request, response) => {
    console.log('PUT Request');
    const id = Number(request.params.id);
    data.tasks[getIdEntry(id, data.tasks)] = request.body;
    response.send(data);
  })
  .patch((request, response) => {
    console.log('PATCH Request');
    const id = Number(request.params.id);
    const keys = Object.keys(request.body);
    keys.forEach(key => data.tasks[getIdEntry(id, data.tasks)][key] = request.body[key]);
    response.send(data);
  })
  .delete((request, response) => {
    console.log('DELETE Request');
    const id = Number(request.params.id);
    data.tasks.splice(getIdEntry(id, data.tasks), 1);
    response.send(data);
  });


server.listen(PORT, () => {
  console.log(`ToDo App at Port ${PORT}`);
});