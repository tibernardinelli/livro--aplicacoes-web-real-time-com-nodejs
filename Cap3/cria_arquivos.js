var fs = require('fs');

for (var i  = 1; i<5; i++){
	var file = __dirname + "/arqs/sync-txt" + i + ".txt";
	var out = fs.writeFileSync(file, "Hello Node.JS!");
	console.log(out);
}

for(var i = 1; i <= 5; i++) {
	var file = __dirname + "/arqs/async-txt" + i + ".txt";
	fs.writeFile(file, "Hello Node.js!", function(err, out) {
		console.log(out);
	});
}