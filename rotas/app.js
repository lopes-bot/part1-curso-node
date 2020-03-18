const express = require("express");
const app = express();

app.get("/",function(req,res){

    res.sendFile(__dirname + "/html/index.html");

});

app.get("/sobre",function(req,res){
    res.send("bem vindo a pagina sobre");
});

app.get("/blog",function(req,res){
    res.send("bem vindo a pagina blog");
});

app.get('/ola/:nome/:cargo',function(req,res){
    res.send("<h1>ola "+req.params.nome+"</h1>"+
    "<h2> seu cargo:"+req.params.cargo+"</h2>");
    
});

app.listen("8080",function(){
    console.log("server rodando na url http://localhost:8080");
});