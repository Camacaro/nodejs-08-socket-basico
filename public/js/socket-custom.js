var socket = io();

/*Establece conexion con el servidor*/
socket.on('connect', function () {
  console.log('Conectado al servidor');
});

/*Establece conexion con el servidor, los on son para escuchar*/
socket.on('disconnect', function () {
  console.log('Perdimos conexion con servidor');
});


// ====================================
// los emit son para enviar informacion
// primer parametro es el nombre del evento
// segundo parametro la data a enviar
// tercer parametro function callback a ejecutar si llega al servidor
// ====================================
socket.emit('enviarMensaje', {
	usuario: 'Jesus',
	mensaje: 'Hola Mundo'
}, function ( resp ) {
	// ====================================
	// esto es lo que ejecuta
	// resp: es la respuesta o mensaje que se envia desde el server
	// ====================================
	//console.log('Se disparo el callback');
	console.log('Respuesta server: ', resp);
});

/*Escuchar informacion del servidor*/
socket.on('enviarMensaje', function (mensaje) {
	console.log('Servidor: ', mensaje);
});