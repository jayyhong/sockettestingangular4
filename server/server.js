const compression = require("compression");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
const port = process.env.PORT || 4200;
app.set('port', port)

let http = require('http');

let server = http.Server(app);

let io = require('socket.io').listen(server);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../dist")));

server.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log("Server successfully connect on " + port);
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('new-message', (message) => {
    console.log(message)
    io.emit('new-message', message);
  })

})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
