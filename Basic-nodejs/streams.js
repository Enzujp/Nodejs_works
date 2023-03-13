const fs = require('fs');

const readStream = fs.createReadStream('./docs/baby.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/boy.txt' );

// The code below tells the system to work with immediately received data
// readStream.on('data', (chunk) => {
//     console.log('.....NEW CHUNK......');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk)
// })


//Piping
readStream.pipe(writeStream);