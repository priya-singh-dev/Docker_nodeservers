// const http = require('http');

// const hostname = '0.0.0.0';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// // 
// server.listen(port, '0.0.0.0', () => { console.log("Server running..");
//  });

console.log('1');
// Connect to server
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

console.log('2');

// Add a connect listener
socket.on('connect', function(socket) { 
  console.log('Connected!');
});

console.log('3');