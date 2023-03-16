const http = require('http');
// the createServer function takes in a callback argument
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<p>hello, enzu<p>');
    res.write('<p>hello, baby boy<p>');
    res.end();


    // ideally html pages would be included in a different sheet and then imported in here.
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});
// server.listen listens for requests, takes in 3 arguments
// port number, localhost on default and a function 

// you have to restart your server when you make changes
