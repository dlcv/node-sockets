var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Listen
socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

// Send info
socket.emit('sendMessage', {
    user: 'Francisco',
    message: '¡Hola mundo!'
}, function(resp) {
    console.log('Respuesta del servidor:', resp);
});

// Listen info
socket.on('sendMessage', function(data) {
    console.log('Servidor: ', data);
})