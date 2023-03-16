const http = require('http');
// the createServer function takes in a callback argument
const server = http.createServer((req, res) => {
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});
// server.listen listens for requests, takes in 3 arguments
// port number, localhost on default and a function 

