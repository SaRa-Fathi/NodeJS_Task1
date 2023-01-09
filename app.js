// console.log("sara");
const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {

if(req.url=="/home" || req.url=="/index.html"){
    returnData("/index.html",res);
}
else if(req.url=="/colorGenerator" || req.url=="/pages/colorGenerator.html"){
    returnData("/pages/colorGenerator.html",res);
}
else if(req.url=="/about" || req.url=="/pages/about.html"){
    returnData("/pages/about.html",res);
}
else if(req.url=="/country.html"){
    returnData("/pages/country.html",res);
}
else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>Page Not Found !</h2>");
    res.end();
}
function returnData(fileName,res){
    // 200 : status code --> ok
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname+fileName,function(err,data){
        res.write(data);
        res.end();

    })
}
}).listen(80);