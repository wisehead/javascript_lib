const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    readableStream.destroy(); // 销毁流
});