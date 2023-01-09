const express=require("express");
const app = express();
const bodyParser=require("body-parser");
const FormbodyParser=bodyParser.urlencoded();

app.get('/home', function(req, res){
    res.sendFile(__dirname+"/home.html")

})
app.post('/login',FormbodyParser, function(req, res){
    // res.send(`<h2>Hello ${req.body.name}</h2>`);
    if(req.body.password.length <8){
        res.send(`<h2>Password must be at least 8 characters long</h2>`);
    }else{
        res.send(`<h2>Welcome ${req.body.name} , Login Success</h2>`);
    }
    console.log(req.body);

})
app.listen(80);