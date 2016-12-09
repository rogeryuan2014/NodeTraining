var express = require('express');

var app = express();

app.get('/', function(req, res){
	//res.send('hello world');
	rest.status(200).send('hello world');
});

app.get('/users', function(req, res){
	res.send("Hello users");
});	

app.get('/users/:id', function(req, res){
	res.send("Hello users id:" + req.params.id);
});	

app.use('*', (req, res)=>{
	res.status(404).send("404: Response not found");
});


app.listen(8081, function(){
	console.log('live on 8081');
});


