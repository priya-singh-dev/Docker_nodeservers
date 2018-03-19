
console.log('1');

var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

console.log('2');

socket.on('connect', function(socket) { 
  console.log('Connected!');
});

console.log('3');
