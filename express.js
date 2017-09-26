var express = require("express");
var app = express();

app.listen("3006", function(){
	console.log("ok");
});

app.get("/ap", function(req, res){
    
    res.end("this is test");
});