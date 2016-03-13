var io = require('socket.io')(8000);

io.on('connection', function(socket) {
    socket.emit('ack')
    socket.on('message', function(data) {
        console.log('got data : ' + data)
        socket.emit('ack')
    })
});
