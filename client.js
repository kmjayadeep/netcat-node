var io = require('socket.io-client');
var socket = io.connect('http://localhost:8000', { reconnect: true });


socket.on('connect', function(socket) {});

var i = 0;

socket.on('ack', function() {
	console.log('acknowledged ',i)
    setTimeout(function() {
        socket.emit('message', ++i)
    },1000)
})
