var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.redirect('/index.html');
    //res.end();
});

app.use(express.static(__dirname));

/*
Due to lates virtual-host update the express apps are no longer being
started individually - they are all exported as express applications and
loaded in vhost process
*/
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server running on port " + port);
})

//module.exports = app;
