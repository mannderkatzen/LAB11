var http = require('http');
var calc = require('./calc');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Calculator</h1><br>');
    res.write('Addition between 4 and 2:'+calc.add(4,2)+'<br>');
    res.write('Subtraction between 4 and 2:'+calc.sub(4,2)+'<br>');
    res.write('Multiplication between 4 and 2:'+calc.mult(4,2)+'<br>');
    res.write('Division between 4 and 2:'+calc.div(4,2)+'<br>');
    res.end();
}).listen(8080);