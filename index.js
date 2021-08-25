
const app = require('express');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log('url:', req.url);
    const pathName = req.url;
    if (pathName === '/' || pathName === '/list') {
        res.end("Product List");
    } else if (pathName === '/product') {
        res.end("Product details");
    } else {
        res.writeHead(404, {
            "Content-type": "text/html"
        })
        res.end('<h1>Page Not Found</h1>');
    }
})

server.listen(3005, '127.0.0.1', () => {
    console.log('Server is running on 3005 port');
})