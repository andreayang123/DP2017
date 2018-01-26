var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': "text/plain;charset='utf-8'"});
    response.write('<p>hello world</p>\n');
    response.end();
});

server.on('connect',function(stream){
    console.log('有连接！');
});
server.listen(8080);

