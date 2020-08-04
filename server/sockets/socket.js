const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Bienvenido a la aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Listen client
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);

        // callback();
        // if (message.user) {
        //     callback({
        //         resp: '¡Todo bien!'
        //     });
        // } else {
        //     callback({
        //         resp: '¡Todo MAL!'
        //     });
        // }
    });
});