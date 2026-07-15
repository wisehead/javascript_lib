const fs = require('fs');

const readableStream = fs.createReadStream('example.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    readableStream.pause(); // 暂停读取
    setTimeout(() => {
        readableStream.resume(); // 恢复读取
    }, 1000);
});