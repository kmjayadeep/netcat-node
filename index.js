var io = require('socket.io')(8000);
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

io.on('connection', function(socket) {
    socket.on('line', function(line) {
    	console.log(line)
    })
});
