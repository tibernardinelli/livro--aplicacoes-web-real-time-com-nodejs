module.exports = function(io){
	var sockets = io.sockets;
	sockets.on('connection', function(client){
		var session = client.handshake.session;
		console.log(session);
		//var usuario = session.usuario;
		console.log(usuario.nome);
		client.on('send-server', function(data) {
			var msg = "<b>" + usuario.nome + ":</b> " + data + "<br>";
			client.emit('send-client', msg);
			client.broadcast('send-client', msg);
		});
	});
};