var http = require('http');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer();
server.on('request',function(request,response) {
    response.writeHead(200);
    if (request.url == '/') {
        response.write('root');
    } else if (request.url == '/foo') { 
        response.write('foo');
    } else {
        response.write('other');
    }
    Object.keys(request.headers).forEach(function(key) {
        response.write(key + ':' + request.headers[key] + '\n')
    })
    var q = querystring.parse(url.parse(request.url).query);
    response.write('v1 = ' + q['v1'] + '\n');
    response.write('v2 = ' + q['v2'] + '\n');
    response.write('sum = ' + (Number(q['v1']) + Number(q['v2'])) + '\n');
    response.end();
});
server.listen(8888,'127.0.0.1');