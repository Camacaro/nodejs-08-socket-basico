const { io } = require('../server');

// ====================================
// Saber si un cliente se conecto
// parametro client, me da toda la inf quien se conecto
// ====================================
io.on('connection', (client)=>{
	console.log('Usuario conectado');

	// ====================================
	// Emitir mensaje al cliente
	// ====================================
	client.emit('enviarMensaje', {
		usuario: 'Admin',
		mensaje: 'Bienvenido a esta aplicacion'
	});

	client.on('disconnect', ()=>{
		console.log('Usuario desconectado');
	});

	// ====================================
	// Escuchar cliente
	// primer parametro evento a escuchar
	// segundo parametro funcion
	// 1er parametro de funcion, data a recibir
	// 2do parametro de funcion callback a recibir
	// ====================================
	client.on('enviarMensaje', (data, callback)=>{
		console.log(data);

		// ====================================
		// Enviar mensaje a todos los usuarios conectados
		// broadcast = enviar a todo el mundo
		// ====================================
		client.broadcast.emit('enviarMensaje', data);


		/*if(mensaje.usuario){
			// ====================================
			// Mandando respuesta al callback
			// ====================================
			callback({
				resp: 'TODO SALIO BIEN'
			});	
		}else{
			callback({
				resp: 'TODO SALIO MAL!!!!!!!'
			});	
		} */

		//callback();
	});

});