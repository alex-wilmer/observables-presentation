var server = require('http').createServer()
  , url = require('url')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server, path: "/casino" })
  , express = require('express')
  , app = express()
  , port = 5000;

app.use(function (req, res) {
  res.send({ msg: "hello" });
});

let clients = 0

wss.on('connection', function connection(ws) {
  console.log('connection made')

  clients++

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.on('close', function () {
    console.log('closedddd.....')
    clients--
  });

  wss.clients.forEach(client => {
    client.send(JSON.stringify({
      type: `newPlayer`,
      numPlayers: clients,
    }));
  });
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });
