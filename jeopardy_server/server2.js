const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketsServerPort);

var collection = new Map();

const wsServer = new webSocketServer({
  httpServer: server
});


wsServer.on('request', function(request) {
  var d = new Date();
  const connection = request.accept(null, request.origin);
  var userID = 'null';

  connection.on('message', function(message) {
  var signal = JSON.parse(message.utf8Data);
  userID = signal.id;
  console.log(signal);
  collection.set(signal.id, signal.user);
  console.log(collection);
  })
  console.log(d);  
  connection.on('close', function(connection) {
    collection.delete(userID);
    console.log(collection);
  })
})

