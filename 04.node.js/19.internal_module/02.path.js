const path = require('path');

const fullPath = path.join(__dirname, 'files', 'example.txt');
console.log(fullPath); // 输出类似: /home/user/project/files/example.txt

const ext = path.extname('index.html');
console.log(ext); // 输出: .html