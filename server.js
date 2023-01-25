const http = require('http');
const PORT = 7000;
var data = [
  {
    "id": 1,
    "tasks": "groceries",
    "isComplete": false
  },
  {
    "id": 2,
    "tasks": "mail",
    "isComplete": false
  },
  {
    "id": 3,
    "tasks": "Dry cleaning",
    "isComplete": true
  }
];
const server = http.createServer((request, response) => {
  if (request.method == 'GET' && request.url == '/tasks') {
    console.log('Get request.');
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(data));
    response.end();
  }

}); server.listen(PORT, () => console.log('ToDo Server')); 
