const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

mongoose.connect('mongodb://fullstack-db:fullstack1@ds223685.mlab.com:23685/fullstack-db', {
  useNewUrlParser: true,
});

app.use(cors())
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(express.json())
app.use(routes);

server.listen(3000, () => {
  console.log('Server started');
});
