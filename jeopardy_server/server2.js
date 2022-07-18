const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketsServerPort);

var collection = new Map();
var isOpen = true;
var alreadyPressed = false;

const wsServer = new webSocketServer({
  httpServer: server
});


wsServer.on('request', function(request) {

  const connection = request.accept(null, request.origin);
  var userID = 'null';

  connection.on('message', function(message) {
  var signal = JSON.parse(message.utf8Data);
  userID = signal.player.id;
  if (signal.type == "join") {
    collection.set(signal.player.id, signal.player.user);
  }

  if (signal.type == "buzz") {
    if (isOpen==false) {
      connection.send("TOO EARLY");
    } else {
      isOpen = false;
      connection.send("YUOR WINNER");
    }
  } 

  })

  
  connection.on('close', function(connection) {
    collection.delete(userID);
    console.log(collection);
  })
})

