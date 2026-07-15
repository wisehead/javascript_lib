const zlib = require('zlib');
const fs = require('fs');

// 创建一个可读流
const readableStream = fs.createReadStream('example.txt');

// 创建一个转换流（压缩）
const gzip = zlib.createGzip();

// 创建一个可写流
const writableStream = fs.createWriteStream('example.txt.gz');

// 将可读流管道到转换流，再管道到可写流
readableStream.pipe(gzip).pipe(writableStream);

// 监听完成事件
writableStream.on('finish', () => {
    console.log('File compressed successfully.');
});