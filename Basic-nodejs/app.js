const express = require('express');
const morgan = require('morgan');
const Blog = require('./models/blog');

const mongoose = require('mongoose');

// set up express app
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://zuzu:jessedavid@nodepractice.cdo4oap.mongodb.net/Nodepractice?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))// app.listen is moved on to ensure we listen for requests only after connection is made 
    // remember to whitelist ip addresses on mongodb to allow access
    .catch((err) => console.log(err));
// register view engine 

app.set('view engine', 'ejs'); // express and ejs automatically look in the views folder for the ejs files
//app.set('views', 'personalized-views'); if you're not using default views folder for ejs

// middleware and static files

app.use(express.static('public'));
app.use(morgan('dev'));



// req contains information about url, and method -- get or post 
// express automatically infers content type so there's no need to specify a header type




app.get('/', (req, res) => {
    res.redirect('/blogs');
    })
    
    
    //res.sendFile('./views/index.html', {root: __dirname});
    //res.send('<p>Homepage</p>');
// });

app.get('/about', (req, res) => {
    res.render('about', {
            title: 'about'
        })
    })


    //res.sendFile('./views/about.html', {root: __dirname});
    //res.send('<p>About page</p>');
// });


// blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1 })
     .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result }) 
     })
     .catch((err) => {
        console.log(err);
     })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'create a blog'
    })
})


// 404 page
app.use((req, res) => {
    res.status(404).render('404');
    
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    // adding the .status to let express know it's a 404 error
})

// The use function runs the code from top to bottom and if it doesn't find a matching url,
// it makes use of the use function, which we have written to the 404. 
// The use function has to be at the bottom of the page.




// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method: ', req.method);
//     next();
// }); // browser hangs after using middleware, and doesn't know how to move on to the next request so we must provide that 
// // using a function called next()
