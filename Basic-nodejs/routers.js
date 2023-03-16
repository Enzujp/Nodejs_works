const http = require('http');

const fs = require('fs');
// the createServer function takes in a callback argument
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('content-Type', 'text/html');

    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
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
