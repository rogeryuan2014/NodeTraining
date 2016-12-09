var express = require('express');

var app = express();

var UserDb = require("./users.json");

app.get('/', function(req, res){
	rest.status(200).send('hello world');
});

app.get('/users', function(req, res){
	res.type('json').status(200).send(UserDb);
});	

app.get('/users/:id', function(req, res){
	var user = UserDb.filter((item)=>{return item.id==req.params.id})[0];
	if(user != null){
		res.type('json').status(200).send(user);
	}
	else{
		res.status(404).send("404: Not Found");
	}
});	

app.use('*', (req, res)=>{
	res.status(404).send("404: Response not found");
});

app.listen(8081, function(){
	console.log('live on 8081');
});


