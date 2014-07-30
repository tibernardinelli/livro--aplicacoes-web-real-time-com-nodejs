module.exports = function(app){
	var contatos = app.controllers.contatos;
	app.get('/contatos', contatos.index);
	app.get('/contato/:id', contatos.show);
	app.post('/contato', contato.create);
	app.get('/contato/:id/editar', contato.edit);
	app.put('/contato/:id', contato.update);
	app.delete('/contato/:id', contato.destroy);
};