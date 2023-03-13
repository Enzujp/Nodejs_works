const fs = require('fs');

// reading files
// Takes 3 arguments, file location an error message just incase, and the data gotten from reading the file.
// fs.readFile('./docs/rough.txt', (err, data) => {
//         if (err) {
//             console.log(err);
//         }

//         console.log(data.toString());
// });

// The to string function added on is being used to comvert the buffer data


// writing files
fs.writeFile('./docs/baby.txt', 'hello, world', () => {
    console.log('this is my victory!')
})


// If you write into a file that doesnt exist, that file is created for you.





//directories




//deleting files