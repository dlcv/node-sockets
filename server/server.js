const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
let server = http.createServer(app);

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

// IO = Backend communication
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err)
        throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});