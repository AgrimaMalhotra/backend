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
  if (request.method == 'GET' && request.url.indexOf('/tasks') != -1) {
    console.log('GET request.');
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(data));
    response.end();
  }
  else if (request.method == 'POST' && request.url.indexOf('/tasks') != -1) {
    let body = '';
    console.log('POST request.');
    request.on('data', (entry) => body += entry.toString());
    request.on('end', () => {
      data.push(JSON.parse(body));
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(data));
    });
  }
  else if (request.method == 'DELETE' && request.url.indexOf('/tasks') != -1) {
    const id = request.url.split('/')[2];
    console.log(`DELETE request.`);
    data.forEach((obj, index) => {
      if (obj.id == id)
        data.splice(index, 1);
    })
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(data));
  }
  else if (request.method == 'PUT' && request.url.indexOf('/tasks') != -1) {
    const id = request.url.split('/')[2];
    let body = '';
    console.log(`PUT request.`);
    request.on('data', (entry) => body += entry.toString());
    request.on('end', () => {
      data.forEach((obj, index) => {
        if (obj.id == id)
          data[index] = JSON.parse(body);
      })
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(data));
    });
  }
  else if (request.method == 'PATCH' && request.url.indexOf('/tasks') != -1) {
    let body = '', idx;
    const id = request.url.split('/')[2];
    console.log('PATCH request.');
    request.on('data', (entry) => body += entry.toString());
    request.on('end', () => {
      const keys = Object.keys(JSON.parse(body));
      data.forEach((obj, index) => {
        if (obj.id == id)
          idx = index;
      })
      keys.forEach(key => data[idx][key] = JSON.parse(body)[key]);
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(data));
    });
  }
}); server.listen(PORT, () => console.log('ToDo Server')); 
