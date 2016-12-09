var http = require('http');
var url = require('url');


http.createServer(function(req, res){

	var queryData = url.parse(req.url, true).query;
	
	res.writeHead(200, {
		'Conent-Type': 'text/plain'
	});
	

	if(qureyData.id){
		res.end('Hellow user: ' + qureyData.id + '\n');
	}else{
		res.end('Unknown Request');
	}

}).listen(8081);


console.log("Server Running");

//console.log("Hello World");