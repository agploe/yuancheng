var express = require("express");
var app = express();
/*console.log(app);*/
app.listen("3006", function(){console.log("ok")});
app.set("view engine", "ejs"); //set engine

app.get("/", function(req, res){

	res.render("index", { sports : [{title:"篮球", desc : "长高"},{title:"足球", desc : "长腿"}]

	});
});