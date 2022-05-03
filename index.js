const http = require('http');
const data = require('./data');
http.createServer((res, resp) => {
    resp.writeHead(200, {'Content-Type' : 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000);