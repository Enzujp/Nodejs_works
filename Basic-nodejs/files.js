const fs =  require('fs');

// to write a file

fs.readFile('./docs/baby.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});


