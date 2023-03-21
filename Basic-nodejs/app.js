const express = require('express');

// set up express app
const app = express();

// register view engine

app.set('view engine', 'ejs'); // express and ejs automatically look in the views folder for the ejs files
//app.set('views', 'personalized-views'); if you're not using default views folder for ejs
// listen for requests

app.listen(3000);

// req contains information about url, and method -- get or post 
// express automatically infers content type so there's no need to specify a header type
app.get('/', (req, res) => {
    res.render('index');
    
    
    //res.sendFile('./views/index.html', {root: __dirname});
    //res.send('<p>Homepage</p>');
});

app.get('/about', (req, res) => {

    res.sendFile('./views/about.html', {root: __dirname});
    //res.send('<p>About page</p>');
});


//redirects
app.get('/about-us', (req, res) => {

    res.redirect('/about');
    //res.send('<p>About page</p>');
});


// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
    // adding the .status to let express know it's a 404 error
})

// The use function runs the code from top to bottom and if it doesn't find a matching url,
// it makes use of the use function, which we have written to the 404. 
// The use function has to be at the bottom of the page.