const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketsServerPort);

var users = []

const wsServer = new webSocketServer({
  httpServer: server
});


wsServer.on('request', function(request) {
  var d = new Date();
  const connection = request.accept(null, request.origin);
  connection.on('message', function(message) {
    console.log(message);
    connection.send('testMessage')
  })
  console.log(d);  
})

