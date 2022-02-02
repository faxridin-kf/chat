const express = require('express');
const { default: socket } = require('./src/socket');
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());
const rooms = new Map();
app.get('/rooms', function (req, res) {
  res.json(rooms);

});
app.post('/rooms', (req, res) => {
  console.log('hello')
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(roomId,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]),
    );
  }
  res.send()
})

io.on('connection', socket => {
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).emit('ROOM:SET_USERS', users);
    console.log(data);
  })
  console.log('socket', socket.id)
})
socket.on('disconnect', () => {
  rooms.forEach((value, roomId) => {
    if (value.get('user').deleted(socket.id)) {
      const users = [...rooms.get(roomId).get('users').values()];
      socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users)
    }
  })
})
server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  } else {
    console.log('====================================');
    console.log("server run");
    console.log('====================================');
  }
});