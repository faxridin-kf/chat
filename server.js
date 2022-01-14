const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const rooms = new Map();


app.get('/rooms', function (req, res) {
  res.json(rooms);
});

io.on('connection', socket => {
  console.log('socket connected', socket.id);
});

server.listen(5555, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен!');
});