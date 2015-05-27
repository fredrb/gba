var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.redirect('/index.html');
    //res.end();
});

app.use(express.static(__dirname));

app.listen(8080, function(){
    console.log("Server running")
})