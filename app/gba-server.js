var express = require('express');
var app = express();

app.set("views", __dirname + "/client");
app.set("view engine", "jade");

app.use(express.static(__dirname + "/client/bower_components"));
app.use(express.static(__dirname + "/gba"));

app.get('/', function(req, res){
    // res.send("Hello, this is GBA Server");
    var data = {
        roms : [
            {
                name : "Sonic Advance",
                path : "../launcher.html#sonic_advance"
            }
        ]
    }
    res.render("index", data);
});

app.listen(3002, function(){
    console.log("Express started");
});

module.exports = app
