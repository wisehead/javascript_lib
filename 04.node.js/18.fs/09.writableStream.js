const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('World!\n');

writableStream.end();

writableStream.on('finish', () => {
    console.log('All writes are now complete.');
});