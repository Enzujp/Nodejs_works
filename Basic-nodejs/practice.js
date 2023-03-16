// creating a server 
// first you have to import the http module


const http = require('http');

// this isn't compulsory but you can map the server to be created 
// to a variable

const server = http.createServer((req, res) => {
    console.log('creating this server');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for server');
});