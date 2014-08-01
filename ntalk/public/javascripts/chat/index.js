var socket = io(’http://localhost:3000’);
socket.on(’send-client’, function (msg) {
	document.getElementById(’chat’).innerHTML += msg;
});
var enviar = function() {
	var nome = document.getElementById(’nome’).value;
	var msg = document.getElementById(’msg’).value;
	socket.emit(’send-server’, {nome: nome, msg: msg});
};
