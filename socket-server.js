var server = require('http').createServer()
  , url = require('url')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: server, path: "/casino" })
  , express = require('express')
  , app = express()
  , port = 5000
  , cors = require('cors')

app.use(cors())

app.use(function (req, res) {
  res.send({ msg: "hello" });
});

let clients = 0

wss.on('connection', function connection(ws) {
  console.log('Connection')

  clients++

  ws.on('message', m => {
    let msg = JSON.parse(m)

    console.log('..', msg.type)
    if (msg.type === `win`) {
      wss.clients.forEach(client => {
        client.send(JSON.stringify({
          type: `gameover`,
        }));
      });
    }
  });

  ws.on('close', function () {
    console.log('Disconnection...')
    clients--

    wss.clients.forEach(client => {
      client.send(JSON.stringify({
        type: `newPlayer`,
        numPlayers: clients,
      }));
    });
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
