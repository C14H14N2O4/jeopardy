const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketsServerPort);

var collection = new Map();
var winner = 'null';
var isOpen = false;
var alreadyPressed = false;

const wsServer = new webSocketServer({
  httpServer: server
});


wsServer.on('request', function(request) {

  const connection = request.accept(null, request.origin);
  var userID = 'null';

  connection.on('message', function(message) {
  var signal = JSON.parse(message.utf8Data);
  if (signal.type == "join") {
    collection.set(signal.player.id, signal.player.user);
    userID = signal.player.id;
  }
  if (signal.type == "start") {
    isOpen = true;
    alreadyPressed = false;
  }
  if(signal.type == "reset") {
    isOpen = false;
    alreadyPressed = false;
    winner = 'null';
  }

  if (signal.type == "buzz") {
    if (alreadyPressed == true) {
      connection.send("TOO LATE");
    }
    else if (isOpen==false) {
      connection.send("TOO EARLY");
    } else {
      isOpen = false;
      alreadyPressed = true;
      winner = signal.player.user;
      connection.send("YUOR WINNER");
    }
  } 

  if (winner !== 'null') {
    connection.send(JSON.stringify({"type": "win", "user": winner}));
  }

  })

  
  connection.on('close', function(connection) {
    collection.delete(userID);
    console.log(collection);
  })
})

