const express = require('express')
const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;
const app = express()
// const port = 5000
const cors = require('cors');

app.use(cors());
app.listen(webSocketServerPort, ()=> console.log(`Listening on port ${webSocketServerPort}`));
const wsServer = new webSocketServer({
  httpServer: app
});

var names = [];

wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);
  console.log(connection);  
})
