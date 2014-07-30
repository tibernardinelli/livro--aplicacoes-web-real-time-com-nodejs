var http = require("http");
var fs = require("fs");
var url = require("url");

var htmlSuffix = '.html';
var errorPage = fs.readFileSync(__dirname + "/error.html");

var server = http.createServer(function (request, response) {

	var parsedUrl = url.parse(request.url, true);
	var file = parsedUrl.pathname;	

	if (file.length > 1){

		if (file.indexOf(htmlSuffix, file.length - htmlSuffix.length) === -1)
			file += htmlSuffix;

		fs.readFile(__dirname + file, function(erro, html){
			if (erro == null) {
				console.log("200 Ok: " + file + " found.");
				response.writeHeader(200, {'content-type': 'text/html'});
				response.end(html);
			} 
			else {
				console.log("404 file not found: " + file);
				response.writeHeader(404, {'content-type': 'text/html'});
				response.end(errorPage);
			}				
		});	
	}
	else
	{
		response.writeHeader(200, {'content-type': 'text/html'});		
		response.end("teste");
	}
});

server.listen(3000, function(){
	console.log("Server Up.");
});