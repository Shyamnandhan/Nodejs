var express = require('express');
var app = express();

app.get('/Shyam',function(req,res){
    res.send("Welcome shyam!!")
});

app.post('/Shyam',function(req,res){
    res.send("You just called the post method at '/Shyam'!\n");
});

app.get('/:id',function(req,res){
    res.send("The id you specified is "+req.params.id);
});

app.use(function(req,res,next){
    console.log("A new request received at "+Date.now());
});
app.get('/',function(req,res){
    res.send("Welcome shyam!!")
});
app.listen(8085);