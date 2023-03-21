const http = require('http');

const fs = require('fs');

const _ = require('lodash');
const { before } = require('node:test');
// the createServer function takes in a callback argument
const server = http.createServer((req, res) => {
    // lodash
    
    const num = _.random(0, 9);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });


    greet();

    // set header content type
    res.setHeader('content-Type', 'text/html');


    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;
            // this is how you redirect to a new path permanently
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end;
        } else {
            // res.write(data);
            // if we're sending one thing to the server we could make use 
            // of the res.end() and parse in the data like res.end(data)
            
            
            res.end(data);
            // however for multiple data entries we might need to be more specific
        }
        

    })
    // ideally html pages would be included in a different sheet and then imported in here.
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});
// server.listen listens for requests, takes in 3 arguments
// port number, localhost on default and a function 

// you have to restart your server when you make changes


