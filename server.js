var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');
var port = 8022;
// Serve up public/ftp folder
var serve = serveStatic('dist/', {'index': ['index.html', 'index.htm']});

// Create server
var server = http.createServer(function(req, res){
	var done = finalhandler(req, res);
	serve(req, res, done)
});

console.log('The server lives at :'+port);
// Listen
server.listen(port);