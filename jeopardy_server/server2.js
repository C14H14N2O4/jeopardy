const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: server
});

// const clients = {};

// const getUniqueID = () => {
//   const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   return s4() + s4() + '-' + s4();
// };

wsServer.on('request', function(request) {
  var d = new Date();
  // var userID = getUniqueID();
  const connection = request.accept(null, request.origin);
  // clients[userID] = connection;
  console.log(connection)
  console.log(d);  
})