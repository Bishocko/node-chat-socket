var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('Please run the index.html as a separate server (using webstorm: right click on index.html > open in browser)')
});

io.on('connection', function(socket){
    socket.on('send-message', function(msg){
        console.log("server received message: " + msg)
        io.emit('message-received', msg);
    });
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});