const url = require('url');
const http = require('http');
const webEx = require('./web-mods-exports.js');

const server = http.createServer((req, res) =>{
    let u = url.parse(req.url);
    res.writeHead(200, 'content-type', 'text/html');
    console.log(u.pathname)
    if(u.pathname === '/'){res.end(webEx.home())}
    else if(u.pathname === '/services'){res.end(webEx.services())}
})

server.listen(8888)