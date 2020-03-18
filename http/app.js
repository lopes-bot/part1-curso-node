var http = require("http");
http.createServer(function(req,res){
    res.end("ola");

}).listen("8080");
console.log("server inciado ...");
